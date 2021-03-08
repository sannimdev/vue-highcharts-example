<template>
    <div class="home">
        <Statistics />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Statistics from '@/components/Statistics.vue'; // @ is an alias to /src

@Component({
    components: {
        Statistics,
    },
})
export default class Home extends Vue {}
</script>
