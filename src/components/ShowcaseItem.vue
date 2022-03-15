<template>
    <div class="pf-showcase__item">
        <div class="left">
            <img :src="require(`@/assets/images/showcase/${showcaseData.image}`)" width="333px" height="244px">
        </div>
        <div class="right">
            <div class="heading">{{showcaseData.heading}}</div>
            <div class="subheading">{{showcaseData.subheading}}</div>
            <div class="text">{{showcaseData.text}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showcaseData: {
            type: Object,
            reqired: true,
            default: () => ({})
        }
    }
}
</script>

<style lang="scss" scoped>
.pf-showcase__item{
    display: flex;
    padding: 50px 0;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;
    margin-bottom: 50px;
    box-shadow: 0px 4px 20px rgba(96, 142, 239, 0.2);
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease;
    }
    .left{
        margin-right: 36px;
    }
    .right{
        .heading{
            font-weight: 700;
            font-size: 30px;
            line-height: 140%;
            margin-bottom: 20px;
        }
        .subheading{
            font-weight: 400;
            font-size: 20px;
            line-height: 140%;
            margin-bottom: 20px;
            color: #8695A4;
        }
        .text{
            font-weight: 400;
            font-size: 14px;
            line-height: 170%;
        }
    }
}
</style>