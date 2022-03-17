<template>
    <div class="pf-design-tools__main">
        <div class="heading m-b-50">My go to design tools</div>
        <div class="d-flex flex-wrap">
            <ToolItem 
                v-for="tool in designTools" 
                :key="tool.id"
                :item="tool"
                class="m-b-60"
            />
        </div>
    </div>
</template>

<script>

import ToolItem from '@/components/ToolItem.vue';

import { designTools } from '@/helper/data.js';

export default {
    components: {
        ToolItem,
    },
    data(){
        return {
            designTools,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>