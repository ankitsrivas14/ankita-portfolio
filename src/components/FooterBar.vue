<template>
    <div class="pf-footer__main">
        <div class="pf-footer__inner d-flex flex-direction-column align-items-center justify-content-center">
            <div class="pf-footer__links d-flex m-b-28">
                <img class="m-r-40 cursor-pointer" @click="handleFooterLinkClick('Linkedin')" :src="require('@/assets/images/footer-links/Linkedin.svg')" alt="Linkedin">
                <img class="m-r-40 cursor-pointer" @click="handleFooterLinkClick('Behance')" :src="require('@/assets/images/footer-links/Behance.svg')" alt="Behance">
                <img class="cursor-pointer" @click="handleFooterLinkClick('Dribble')" :src="require('@/assets/images/footer-links/Dribble.svg')" alt="Dribble">
            </div>
            <div class="pf-footer__copyright">
                Copyright © AnkitaGupta
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleFooterLinkClick(link){
            let externalLink;
            switch(link){
                case 'Linkedin':
                    externalLink = 'https://www.linkedin.com/in/ankita-gupta-938448143/';
                    break;
                case 'Behance':
                    externalLink = 'https://www.behance.net/ankitagupta19';
                    break;
                case 'Dribble':
                    externalLink = 'https://dribbble.com/ankitadesigns';
                    break;
            }
            if(externalLink){
                window.open(externalLink, '_blank');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.pf-footer__main{
    background-color: $primary-light;
    padding: 50px;
    display: flex;
    .pf-footer__inner{
        margin: 0 auto;
        width: $max-width;
        .pf-footer__copyright{
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: $primary-dark;
        }
    }
}
</style>