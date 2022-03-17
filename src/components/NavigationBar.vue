<template>
    <div class="pf-navbar__main" :class="navbarScrollClass">
        <div class="pf-navbar__main-inner">
            <router-link class="pf-navbar__item" to="/">Home</router-link>
            <a class="pf-navbar__item" href="#works">Works</a>
            <router-link class="pf-navbar__item" to="/illustrations">Illustrations</router-link>
            <router-link class="pf-navbar__item" to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navbarScrollClass: '',
        }
    },
    created(){
        window.addEventListener('scroll', () => {
            if(window.scrollY > 482){
                this.navbarScrollClass = 'pf-navbar__shadow';
            }
            else{
                this.navbarScrollClass = '';
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.pf-navbar__main{
    width: 100vw;
    background-color: #fff;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 100;
    .pf-navbar__main-inner{
        max-width: $max-width;
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
                background-color: $primary-light;
            }
            &.router-link-exact-active{
                background-color: $primary-dark;
                color: #fff;
            }
        }
    }
}
.pf-navbar__shadow{
    box-shadow: 0px 4px 10px rgba(96, 142, 239, 0.1);
}
</style>