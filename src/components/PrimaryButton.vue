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
    background: #608EEF;
    border-radius: 6px;
}
</style>