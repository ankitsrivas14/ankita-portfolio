<template>
    <div class="pf-main-wrapper">
        <HeroWrapper />
        <ShowcaseBox />
        <AboutMe />
    </div>
</template>

<script>

import HeroWrapper from '@/components/HeroWrapper.vue';
import ShowcaseBox from '@/components/ShowcaseBox.vue';
import AboutMe from '@/components/AboutMe.vue';

export default {
    components: {
        HeroWrapper,
        ShowcaseBox,
        AboutMe
    }
}
</script>

<style lang="scss" scoped>
.pf-main-wrapper{
    background-color: #fff;
    margin: 0 auto;
}
</style>