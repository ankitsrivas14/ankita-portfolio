<template>
    <div class="pf-main-wrapper">
        <HeroWrapper />
    </div>
</template>

<script>
import HeroWrapper from '@/components/HeroWrapper.vue';
export default {
    components: {
        HeroWrapper
    }
}
</script>

<style lang="scss" scoped>
.pf-main-wrapper{
    max-width: 1152px;
    background-color: #fff;
    margin: 0 auto;
}
</style>