<template>
    <div id="prices">
        <h1>경기도 양주시 물가동향 (개인 서비스 요금)</h1>
        <div class="prices-area">
            <div class="aggrid">
                <AgGridVue
                    class="ag-theme-alpine gridVue"
                    @grid-ready="onGridReady"
                    :columnDefs="columnDefs"
                    :row-data="data"
                />
                <div class="highcharts" v-if="visibleGraph">
                    <ul class="filter">
                        <li>
                            <select @change="selectedItem">
                                <option v-for="item in items" :key="item">
                                    {{ item }}
                                </option>
                            </select>
                        </li>
                    </ul>
                    <highcharts :options="chartOptions" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { AgGridVue } from 'ag-grid-vue';
// import Highcharts from 'highcharts';
import { Chart } from 'highcharts-vue';
import { items, keymap, regionKeys } from '@/lib/data';
import { ColumnDef, Prices, ChartOptions, Series } from '@/types';
import { getData } from '@/lib/api';

const YangjuParser = {
    getColumnDefs(): ColumnDef[] {
        const keys = Object.keys(keymap);
        return keys.map((key) => ({ field: key, headerName: keymap[key] }));
    },
    getRegions(): string[] {
        return regionKeys.concat();
    },
    getItems(): string[] {
        return items.concat();
    },
};

export type YangjuParser = typeof YangjuParser;

const chartMaker = {
    getInitializedChartOptions(): ChartOptions {
        return {
            chart: {
                type: 'column',
            },
            title: {
                text: null,
            },
            xAxis: {
                categories: ['물가'],
            },
            yAxis: {
                gridLineColor: '#d0d0d0',
                gridLineWidth: 0.3,
                tickInterval: 2500,
                title: {
                    text: null,
                },
                labels: {
                    // https://api.highcharts.com/highcharts/yAxis.labels.format
                    format: `{value} 원`,
                },
            },
        };
    },
    // 품목에 따라 그래프 만들기
    getSeriesByItem(item: string, data: Prices[], yangjuParser: YangjuParser): Series[] {
        const regionKeys = yangjuParser.getRegions();
        const itemObj = data.find((element) => element.item === item);
        const result = [
            { name: '평균', data: [itemObj.average_current] },
            { name: '전월평균', data: [itemObj.average_previous] },
            ...regionKeys.map((key) => ({ name: keymap[key], data: [itemObj[key] || 0] })),
        ];
        return result;
    },
};

export default Vue.extend({
    name: 'Prices',
    components: {
        AgGridVue,
        highcharts: Chart,
    },
    data() {
        return {
            columnDefs: YangjuParser.getColumnDefs() as ColumnDef[],
            data: [] as Prices[],
            visibleGraph: true,
            items: YangjuParser.getItems(),
            // regions: YangjuParser.getRegions() as string[]
            chartOptions: {} as ChartOptions,
        };
    },
    async created() {
        this.chartOptions = chartMaker.getInitializedChartOptions();
        this.data = await getData();
        this.drawChart(this.data[0].item);
    },
    methods: {
        onGridReady(params: unknown) {
            console.log('grid loaded', params);
        },
        toggleGraph() {
            this.visibleGraph = !this.visibleGraph;
        },
        selectedItem(event) {
            const { value } = event.target;
            this.drawChart(value);
        },
        drawChart(item: string) {
            const series = chartMaker.getSeriesByItem(item, this.data, YangjuParser);
            this.chartOptions = {
                ...this.chartOptions,
                title: {
                    text: item,
                },
                series,
                yAxis: {
                    // y축의 최댓값 지정하기 (각 물가 중 최고액을 최댓값으로 지정)
                    max: Math.max(...series.map(({ data }) => data[0])),
                },
            };
        },
    },
});
</script>

<style lang="scss" scoped>
#prices {
    width: 1400px;
    margin: 0 auto;

    h1 {
        text-align: center;
        font-weight: bold;
        font-size: 1.4rem;
        margin: 20px 0;
    }

    p {
        margin: 10px 0;
        .filter {
            li {
                display: inline-block;

                &:not(:first-child) {
                    margin-left: 10px;
                }
            }
        }
    }

    .prices-area {
        width: 100%;
        height: 80vh;

        .gridVue {
            height: 32vh;
        }
        .highcharts {
            margin: 0 auto;
            height: 30vh;
        }
    }
}
</style>