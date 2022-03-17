<template>
    <div class="pf-main-wrapper">
        <HeroWrapper />
        <ShowcaseBox />
    </div>
</template>

<script>
import HeroWrapper from '@/components/HeroWrapper.vue';
import ShowcaseBox from '@/components/ShowcaseBox.vue';
export default {
    components: {
        HeroWrapper,
        ShowcaseBox
    }
}
</script>

<style lang="scss" scoped>
.pf-main-wrapper{
    background-color: #fff;
    margin: 0 auto;
}
</style>