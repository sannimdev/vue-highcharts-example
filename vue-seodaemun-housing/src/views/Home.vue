<template>
    <div class="home">
        <Housing />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Housing from '@/components/Housing.vue';

@Component({
    components: {
        Housing,
    },
})
export default class Home extends Vue {}
</script>
