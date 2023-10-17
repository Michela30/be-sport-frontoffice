<script>
//import
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import axios from 'axios';
import { store } from './store';

   export default {
    data() {
      return{
      store,
      }
    },
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent
    },
    methods(){

    },
    created(){
      // axios.get('')
      // .then(response => {
      //   console.log(response.data)
      // })

    },
    mounted(){
    }
  }
</script>



<template>

    <HeaderComponent/>
    
    <!--🔰 router view down here, here slides main content -->
    <router-view></router-view>

    <!-- <MainComponent/> -->

    <FooterComponent/>

</template>




<style lang="scss">
@use 'assets/scss/main.scss';




</style>
