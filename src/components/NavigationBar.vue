<template>
    <div class="pf-navbar__main" :class="navbarScrollClass">
        <div class="pf-navbar__main-inner">
            <router-link class="pf-navbar__item" :class="{'active': isHomeActive}" to="/" @click="handleHomeClick">Home</router-link>
            <a class="pf-navbar__item" href="#works" :class="{'active': isWorks}">Works</a>
            <a class="pf-navbar__item" href="#about" :class="{'active': isAbout}">About</a>
            <router-link class="pf-navbar__item" to="/illustrations">Illustrations</router-link>
            <a class="pf-navbar__item" href="#">Contact</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navbarScrollClass: '',
            isWorks: false,
            isAbout: false,
        }
    },
    computed: {
        isHomeActive(){
            if(this.$route.name === 'landing-page' && !this.isWorks && !this.isAbout){
                return true;
            }
            return false;
        },
    },
    methods: {
        checkWorks(){
            const worksPosition = document.querySelector('.pf-showcase__main');
            if(worksPosition){
                if((worksPosition.getBoundingClientRect().top + document.documentElement.scrollTop - 220) < window.scrollY && (worksPosition.getBoundingClientRect().bottom + document.documentElement.scrollTop - 100) > window.scrollY){
                    return this.isWorks = true;
                }
                return this.isWorks = false;
            }
            return this.isWorks = false;
        },
        checkAbout(){
            const aboutPosition = document.querySelector('.pf-about-me__main');
            if(aboutPosition){
                if((aboutPosition.getBoundingClientRect().top + document.documentElement.scrollTop - 100) < window.scrollY && (aboutPosition.getBoundingClientRect().bottom + document.documentElement.scrollTop - 100) > window.scrollY){
                    return this.isAbout = true;
                }
                return this.isAbout = false;
            }
            return this.isAbout = false;
        },
        handleHomeClick(){
            console.log("handleHomeClick");
        },
    },
    created(){
        window.addEventListener('scroll', () => {
            if(window.scrollY > 482){
                this.navbarScrollClass = 'pf-navbar__shadow';
            }
            else{
                this.navbarScrollClass = '';
            }
            if(this.$route.name === 'landing-page'){
                this.checkWorks();
                this.checkAbout();
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
            color: $black;
            padding: 16px 20px;
            border-radius: 6px;
            cursor: pointer;
            &:hover{
                background-color: $primary-light;
            }
        }
        .active{
            background-color: $primary-dark;
            color: #fff;
            &:hover{
                background-color: $primary-dark !important;
            }
        }
    }
}
.pf-navbar__shadow{
    box-shadow: 0px 4px 10px rgba(96, 142, 239, 0.1);
}
</style>