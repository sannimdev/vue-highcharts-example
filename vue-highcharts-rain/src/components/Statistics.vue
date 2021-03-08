 <template>
    <div class="rain">
        <h1>경상남도 하동군 강우량</h1>
        <div class="board">
            <div>
                <button @click="checkAll(true)">전체 선택</button>
                <button @click="checkAll(false)">전체 해제</button>
            </div>
            <div class="area">
                <h2>지역 선택</h2>
                <ul class="selection">
                    <li v-for="region in regions" :key="region.id" class="region" :class="region.id">
                        <label>
                            <input type="checkbox" :checked="region.checked" @click="toggleRegion(region)" />
                            <span>{{ region.name }}</span>
                        </label>
                    </li>
                </ul>
            </div>
            <Highcharts :options="chartOptions" :callback="chartCallback" />
        </div>
        <ul class="selection">
            <li><button @click="downloadFile('png')">PNG 다운로드</button></li>
            <li><button @click="downloadFile('jpeg')">JPEG 다운로드</button></li>
            <li><button @click="downloadFile('svg')">SVG 다운로드</button></li>
            <li><button @click="downloadFile('csv')">CSV 다운로드</button></li>
        </ul>
        <div class="foot">
            원본 데이터 출처:
            <a href="https://www.data.go.kr/data/3074948/fileData.do">공공데이터포털</a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Highcharts from 'highcharts';
import { Chart } from 'highcharts-vue';
import { cloneDeep } from 'lodash';
import exportingInit from 'highcharts/modules/exporting';
import exportingCSVInit from 'highcharts/modules/export-data';
import offlineExporting from 'highcharts/modules/offline-exporting'; // 파일로 저장하기 모듈

import { CheckedItem, RainDatum, ChartOptions, Series, Axis } from '@/types';
import { getRainData, HadongParser } from '@/lib/api';

// hint: https://www.javaer101.com/ko/article/40923102.html
offlineExporting(Highcharts);
exportingInit(Highcharts);
exportingCSVInit(Highcharts);

const hadongParser = new HadongParser();
const chartMaker = {
    initialize(): ChartOptions {
        return {
            chart: {
                zoomType: 'x',
            },
            title: {
                text: null,
            },
            exporting: {
                enabled: false, // context 메뉴 보일지 말지
                fallbackToExportServer: false, // 클라이언트 단에 그려진 차트를 다운로드받고 싶다면 선택
            },
            yAxis: {
                title: {
                    text: '강우량',
                },
                tickInterval: 250,
                labels: {
                    format: `{value} mm`,
                },
            },
        };
    },
    // 📊 차트 관련 데이터 만들기
    regionToSeries(rainData: RainDatum[], region: CheckedItem): Series {
        // const n: number[] = [0, 0, 0, 0, 0, 0, 0, 0].map(() =>
        //   Math.round(Math.random() * 10 + 1)
        // );
        const data: number[] = [];
        for (const datum of rainData) {
            if (datum.type < 1) {
                continue;
            }
            data.push(datum[region.id]);
        }
        return {
            name: region.name,
            data,
        };
    },
    composeXAxis(): Axis {
        const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => m + '월');
        return {
            categories: month,
        };
    },
};

export default Vue.extend({
    name: 'Statistics',
    components: {
        Highcharts: Chart,
    },
    data() {
        return {
            rainData: {} as RainDatum[],
            regions: hadongParser.getCheckedList() as CheckedItem[],
            chartOptions: {} as ChartOptions,
            chartObj: {} as Chart,
            // clonedChartObj: {},
        };
    },
    async created() {
        await this.initialize();
        this.checkAll(true);
    },
    methods: {
        // 데이터 불러오기
        // fetchData
        async fetchData() {
            this.rainData = await getRainData();
        },
        // 🚀 UI
        toggleRegion(region: CheckedItem) {
            region.checked = !region.checked;
            // x축 구성
            if (region.checked) {
                this.addSeries(region);
            } else {
                this.removeSeires(region);
            }
        },
        setRegionChecked(region: CheckedItem, checked: boolean) {
            region.checked = checked;
        },
        checkAll(checked: boolean) {
            this.regions.forEach((region) => {
                this.setRegionChecked(region, checked);
                region.checked ? this.addSeries(region) : this.removeSeires(region);
            });
        },
        // 차트 콜백 메서드
        chartCallback(chart: Chart) {
            this.chartObj = chart;
        },
        //🚧 차트 건드리기
        async initialize() {
            this.chartOptions = chartMaker.initialize();
            await this.fetchData();
            this.composeXAxis();
        },
        addSeries(region: CheckedItem) {
            const series = this.chartOptions.series || [];
            if (series.find(({ name }) => name === region.name)) {
                // 이미 데이터가 있으면 삽입하지 않는다.
                return;
            }

            const newSeries: Series = chartMaker.regionToSeries(this.rainData, region);
            // 비구름 그리기
            const maxRainfall = Math.max(...newSeries.data);
            const newSeriesWithMarker = {
                ...newSeries,
                data: newSeries.data.map((y) =>
                    y === maxRainfall
                        ? {
                              y,
                              marker: { symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)' },
                          }
                        : y
                ),
            };
            this.chartOptions = {
                ...this.chartOptions,
                series: [...series, newSeriesWithMarker],
            };
        },
        removeSeires(region: CheckedItem) {
            const series: Series[] = this.chartOptions.series || [];
            if (series.length > 0) {
                this.chartOptions = {
                    ...this.chartOptions,
                    series: series.filter(({ name }) => name !== region.name),
                };
            }
        },
        composeXAxis() {
            if (!this.chartOptions.xAxis) {
                this.chartOptions = {
                    ...this.chartOptions,
                    xAxis: chartMaker.composeXAxis(),
                };
            }
        },
        /* 
            💾 다운로드 예제 
                - highcharts 영역 밖에서 다운로드 제어하기
        */
        downloadFile(fileType: string) {
            const mirror = cloneDeep(this.chartObj);
            const download = (type: string) => {
                //highcharts 백업
                if (type && type.includes('csv')) {
                    // csv 다운로드
                    this.chartObj.downloadCSV();
                    return;
                }
                // 😪 여기서 깊은 복사를 한 mirror를 사용하면 다시 다운로드를 할 때 오류가 난다.
                this.chartObj.exportChart({ type });
            };
            const contentType: { [key: string]: string } = {
                png: 'image/png',
                jpeg: 'image/jpeg',
                svg: 'image/svg+xml',
                csv: 'text/csv',
            };
            download(contentType[fileType]);
            this.chartObj = mirror;
        },
    },
});
</script>

<style lang="scss" scoped>
.rain {
    ul.selection {
        > li {
            list-style-type: none;
            display: inline-block;
            &:not(:first-child) {
                margin-left: 15px;
            }
        }
    }
}
</style>