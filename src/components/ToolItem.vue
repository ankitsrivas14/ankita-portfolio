<template>
    <div class="pf-tool-item__main d-flex align-items-center flex-direction-column">
        <img :src="item.image" :alt="item.label" height="40px" class="m-b-14">
        <div class="tool-name">{{ item.label }}</div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
            default: () =>  ({})
        }
    }
}
</script>

<style lang="scss" scoped>
.pf-tool-item__main{
    width: 165px;
    margin-right: 50px;
    .tool-name{
        font-weight: 400;
        font-size: 24px;
        line-height: 170%;
    }
}
</style>