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
      store.braintree();
    }
  }
</script>



<template>
  <div>
    <div id="dropin-wrapper">
    <div id="checkout-message"></div>
    <div id="dropin-container"></div>
    <button id="submit-button">Submit payment</button>
  </div>
    <HeaderComponent/>

    <MainComponent/>

    <FooterComponent/>

  </div>
</template>




<style lang="scss">
@use 'assets/scss/main.scss';




</style>
