<template>
    <div>
        <h1>서울시 서대문구 주택 현황</h1>
        <div class="charts">
            <ul class="years">
                <li class="year" v-for="datum in data" :key="datum.year">
                    <pie-chart :year="datum.year" :chartOptions="getChartOptions(datum)" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PieChart from '@/components/PieChart.vue';
import { ChartOptions, PieData, PieSeries, SeodaemunHousing } from '@/types';
import { getData } from '@/lib/api';
import { keyLabel } from '@/lib/data';

const chartMaker = {
    getInitializedChartOptions(): ChartOptions {
        return {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false,
            },
            credits: false,
            accessibility: {
                point: {
                    // valueSuffix: '%',
                },
            },
            title: {
                text: null,
                // text: '동그라미',
                // align: 'center',
                // verticalAlign: 'middle',
                // y: -43,
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false,
                        inside: true,
                        distance: '-100%', // 가운데
                        y: -10,
                        align: 'right',
                        style: {
                            fontSize: '1rem',
                            color: '#e63946',
                        },
                    },
                    // startAngle: -90,
                    // endAngle: 90,
                    // center: ['50%', '75%'],
                    size: '100%',
                    showInLegend: true,
                },
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>',
            },
        };
    },
    getSeries(datum: SeodaemunHousing): PieSeries[] {
        const keys = Object.keys(datum);
        console.log('=== ', datum.year, '=== 작업 중...');
        const maxValue = keys
            .filter((key) => !['year', 'total'].includes(key))
            .map((key) => datum[key])
            .sort((a: number | undefined, b: number | undefined) => (b || 0) - (a || 0))[0];
        const data: PieData[] = [];
        for (const key of keys) {
            if (['year', 'total'].includes(key)) continue;

            if (datum[key] === maxValue) {
                // console.log(datum.year, keyLabel[key], datum[key], 'enabled가 true라구!!!');
                data.push({
                    name: keyLabel[key],
                    y: datum[key],
                    color: '#e63946',
                    dataLabels: {
                        enabled: true,
                        style: {
                            // fontSize: '1rem',
                            // color: 'red',
                            textAlign: 'center',
                        },
                        formatter() {
                            return `<p>${keyLabel[key]}<br />${
                                Math.round(((datum[key] || 0) / datum.total) * 1000) / 10
                            }%</p>`;
                        },
                    },
                });
            } else data.push([keyLabel[key], datum[key] || 0]);
        }
        return [
            {
                type: 'pie',
                innerSize: '70%',
                name: `${datum.year}년도`,
                data: data,
            },
        ];
    },
    getChartOptions(datum: SeodaemunHousing, chartOptions: ChartOptions) {
        return {
            ...chartOptions,
            series: this.getSeries(datum),
        };
    },
};

export default Vue.extend({
    name: 'Housing',
    components: {
        PieChart,
    },
    data() {
        return {
            data: [] as SeodaemunHousing[],
            obj: { hello: 'world' },
        };
    },
    async created() {
        await this.getData();
    },
    methods: {
        async getData() {
            this.data = await getData();
        },
        getChartOptions(datum: SeodaemunHousing) {
            return chartMaker.getChartOptions(datum, chartMaker.getInitializedChartOptions());
        },
    },
});
</script>

<style lang="scss" scoped>
.charts {
    .years {
        margin: 0;
        padding: 0;
        .year {
            list-style: none;
            display: inline-block;
            width: 190px;
        }
    }
}
</style>