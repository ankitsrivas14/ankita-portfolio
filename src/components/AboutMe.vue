<template>
    <div class="pf-about-me__main">
        <div class="heading m-b-20">About me</div>
        <div class="pf-about-me__text m-b-70">
            <p>I am a self-taught designer with a curious mind. I ❤ designing interactions that make technology feel effortless. Building engaging experiences is what drives me. I started my journey in electronics and communications engineering but found solace in designing. And since then worked in three different sectors - Edtech, Delivery-based Startup, and currently in Healthcare.</p>
            <p>My diverse experiences all-around 4 years of graduation have sharpened my skills in research, analysis, and aesthetics. When I finally explored the field of UX, I fell in love with it. I am excited by the process of solving users' problems through designs.</p>
            <p>A strong believer in improving and iterating the problems to achieve the final results.</p>
        </div>
        <DesignTools />
    </div>
</template>

<script>

import DesignTools from '@/components/DesignTools.vue';

export default {
    components: {
        DesignTools,
    }
}
</script>

<style lang="scss" scoped>
.pf-about-me__main{
    max-width: $max-width;
    margin: 0 auto;
    padding-top: 70px;
    .pf-about-me__text{
        font-weight: 400;
        font-size: 16px;
        line-height: 170%;
    }
}
</style>