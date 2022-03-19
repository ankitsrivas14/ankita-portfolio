<template>
    <div class="pf-showcase__main">
        <div class="pf-showcase__inner-main">
            <div class="heading m-b-50">Works</div>
            <ShowcaseItem 
                v-for="item in showcaseData"
                :key="item.heading"
                :showcaseData="item"
            />
        </div>
        <div id="about"></div>
    </div>
</template>

<script>
const SHOWCASE_DATA = [
    {
        id: 1,
        heading: 'Swiggy Delivery Tipping : Bridging the Emotional Gap',
        subheading: 'UX Case study',
        text: 'Redesigned the Swiggy delivery tipping user journey to complete the emotional aspect of it. The psychology that works behind tipping is that the user wants to bring a SMILE on the delivery partner’s face. I am here to solve that pain point of showing the DIGITAL SMILE to the user and completing his user journey.',
        image: 'swiggy-tipping.png',
    },
    {
        id: 2,
        heading: 'FlyOnWheels | A Scooty/Bike Rental Service ',
        subheading: 'UX Case study',
        text: 'FlyOnWheels is the project that I took up for my Google UX Certification. It is a platform from where tourists/locals can pre-book and rent scooties and bikes to explore the cities in the most raw form. It provides a smooth way to rent bikes at their preferred time with easy vehicle drop off & pick up at their desired location. ',
        image: 'fly-on-wheels.png',
    },
    {
        id: 3,
        heading: 'OkayGo App Designs',
        subheading: 'UX/UI Design',
        text: 'At OkayGo, I worked on creating some of the user flows from scratch. These are part of my actual work at the company. Please mail for enquiry. ',
        image: 'okay-go.png',
    },
    {
        id: 4,
        heading: 'CoffeeHouse',
        subheading: 'UX Research',
        text: 'It is a UX research project to find out the problem statements that can be improved for a international coffee store using empathy mapping, user journeys and competitive audit with various competitors. ',
        image: 'coffee-house.png',
    },
    {
        id: 5,
        heading: 'Mobile & Website Designs',
        subheading: 'UI Designs',
        text: 'These are some of my website UI designs. Just me playing in my free time with my artboard and trying to create asethetic web pages, dashboards, mobile screens and all.',
        image: 'mobile-website-designs.png',
    },
]
import ShowcaseItem from '@/components/ShowcaseItem.vue'
export default {
    components: {
        ShowcaseItem
    },
    data(){
        return{
            showcaseData: SHOWCASE_DATA,
        }
    }
}
</script>

<style lang="scss" scoped>
.pf-showcase__main{
    background-color: rgba(233, 240, 255, 1);
    padding: 72px 100px;
    .pf-showcase__inner-main{
        max-width: $max-width;
        margin: 0 auto;
    }
}
</style>