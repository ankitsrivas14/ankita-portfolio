<template>
    <div class="pf-hero__main" id="home">
        <div class="pf-hero__text-container">
            <div class="heading">Hi, I am Ankita,</div>
            <div class="heading">a self-taught and passionate UX/UI Designer</div>
            <p>I focus on creating meaningful experiences that are functional and visually compelling. I try my best to balance the business and user goals.</p>
            <PrimaryButton id="works" class="resume-download-btn">Download Resume</PrimaryButton>
        </div>
        <img :src="require('@/assets/images/profile-image.png')" width="320px">
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
    max-width: $max-width;
    margin: 0 auto;
    @media screen and (max-width: 1150px) {
        img{
            width: 250px;
        }
        .pf-hero__text-container{
            margin-right: 40px;
            .heading{
                font-size: 36px !important;
                line-height: 1.5 !important;
            }
        }
    }
    @media screen and (max-width: 950px) {
        padding: 80px 50px !important;
        .pf-hero__text-container{
            .heading{
                font-size: 28px !important;
            }
        }
    }
    @media screen and (max-width: 750px) {
        padding: 20px 50px !important;
        flex-direction: column !important;
        .pf-hero__text-container{
            order: 2;
            margin-right: 0 !important;
            text-align: center;
        }
        img{
            order: 1;
            margin-bottom: 20px !important;
        }
        .resume-download-btn{
            margin: 0 auto;
        }
    }
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