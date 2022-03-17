<template>
    <div class="pf-primary-button__main">
        <slot></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.pf-primary-button__main{
    width: max-content;
    padding: 14px 20px;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    background: $primary-dark;
    border-radius: 6px;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(96, 142, 239, 0.2);
    &:active{
        transform: scale(0.98);
        background-color: #1145B5;
    }
    &:hover{
        background-color: #1145B5;
    }
}
</style>