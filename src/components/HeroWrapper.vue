<template>
    <div class="pf-hero__main">
        <div class="pf-hero__text-container">
            <div class="heading">Hi, I am Ankita,</div>
            <div class="heading">a self-taught and passionate UX/UI Designer</div>
            <p>I focus on creating meaningful experiences that are functional and visually compelling. I try my best to balance the business and user goals.</p>
            <PrimaryButton>Download Resume</PrimaryButton>
        </div>
        <img :src="require('@/assets/images/profile-image.png')">
    </div>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton.vue';
export default {
    components: {
        PrimaryButton,
    }
}
</script>

<style lang="scss" scoped>
.pf-hero__main{
    padding: 80px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pf-hero__text-container{
        max-width: 600px;
        .heading{
            font-weight: 700;
            font-size: 44px;
            line-height: 60px;
        }
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 170%;
            margin-bottom: 26px;
        }
    }
}
</style>