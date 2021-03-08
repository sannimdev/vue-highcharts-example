<template>
    <div class="home">
        <Prices />
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Prices from '@/components/Prices.vue';

export default Vue.extend({
    components: {
        Prices,
    },
});
</script>
