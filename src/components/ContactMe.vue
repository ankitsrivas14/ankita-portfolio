<template>
    <div class="pf-contact__main" id="contact">
        <div class="pf-contact__inner d-flex">
            <div class="left">
                <div class="contact-title m-b-20">
                    Have a project in mind?<br>
                    Let's get in touch.
                </div>
                <div class="contact-email m-b-30 cursor-pointer" @click="handleContactEmailClick">
                    hi@ankita.design
                </div>
                <div class="contact-text">
                    Always willing to collaborate for new projects, a cup of tea and discussing new ideas and product problems worth solving for. 
                </div>
            </div>
            <img :src="require('@/assets/images/contact-image.png')" alt="Contact Image">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleContactEmailClick(){
            window.open('mailto:hi@ankita.design', '_blank');
        }
    }
}
</script>

<style lang="scss" scoped>
.pf-contact__main{
    background-color: $primary-dark;
    padding: 40px;
    display: flex;
    .pf-contact__inner{
        margin: 0 auto;
        width: $max-width;
        .left{
            margin-right: 40px;
            color: #FFFFFF;
            font-weight: 700;
            .contact-title{
                font-size: 42px;
                line-height: 140%;
            }
            .contact-email{
                font-size: 30px;
                line-height: 170%;
                text-decoration-line: underline;
                background-color: $primary-darker;
                padding: 4px 20px;
                border-radius: 10px;
                width: max-content;
            }
            .contact-text{
                font-weight: 500;
                font-size: 24px;
                line-height: 140%;
            }
        }
    }
}
</style>