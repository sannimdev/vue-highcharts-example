<template>
    <div>
        <h2>{{ year }}년도</h2>
        <highcharts :options="chartOptions" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Chart } from 'highcharts-vue';

export default Vue.extend({
    name: 'PieChart',
    components: {
        highcharts: Chart,
    },
    props: {
        year: { required: true, type: Number },
        chartOptions: { required: true, type: Object },
    },
});
</script>

<style lang="scss" scoped>
h2 {
    margin: 0;
    padding: 0;
}
</style>