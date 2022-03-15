<template>
    <div class="pf-navbar__main">
        <router-link class="pf-navbar__item" to="/">Home</router-link>
        <router-link class="pf-navbar__item" to="/works">Works</router-link>
        <router-link class="pf-navbar__item" to="/illustrations">Illustrations</router-link>
        <router-link class="pf-navbar__item" to="/contact">Contact</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.pf-navbar__main{
    max-width: 1152px;
    background-color: #fff;
    margin: 0 auto;
    padding: 24px;
    display: flex;
    justify-content: flex-end;
    .pf-navbar__item{
        margin-left: 8px;
        font-size: 20px;
        font-weight: 500;
        text-decoration: none;
        color: #21243D;
        padding: 16px 20px;
        border-radius: 6px;
        cursor: pointer;
        &:hover{
            background-color: #D0DEFB;
        }
        &.router-link-exact-active{
            background-color: #608EEF;
            color: #fff;
        }
    }
}
</style>