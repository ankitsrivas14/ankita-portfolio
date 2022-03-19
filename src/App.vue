<template>
  <div id="app">
    <NavigationBar />
    <router-view/>
     <ContactMe />
     <FooterBar />
    <!-- <div class="pf-under-upgrade">
        <div>Under Maintenance</div>
        <div class="subtext">Contact at hi@ankita.design</div>
    </div> -->
  </div>
</template>
<script>
import NavigationBar from '@/components/NavigationBar.vue';
import ContactMe from '@/components/ContactMe.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  components: {
    NavigationBar,
    ContactMe,
    FooterBar,
  }
}
</script>
<style lang="scss">
// .pf-under-upgrade{
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   font-weight: 700;
//   font-size: 42px;
//   .subtext{
//     font-size: 28px;
//     font-weight: 500;
//     margin-top: 20px;
//   }
// }
</style>
