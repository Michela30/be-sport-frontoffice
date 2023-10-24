<script>
// import
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LoaderComponent from './components/LoaderComponent.vue';
import axios from 'axios';
import { store } from './store';

export default {
  data() {
    return {
      store,
      isLoad : false
    }
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoaderComponent,
  },
  methods: {
    braintree() {
      const input = document.querySelector('#dropin-wrapper');
      braintree.dropin.create({
        // Inserisci la tua chiave di autorizzazione qui
        authorization: 'sandbox_s93sbd2q_2jc4smw4xvmkzsp6',
        container: '#dropin-container'
      }, function (createErr, instance) {
        input.addEventListener('mouseleave', function () {
          instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
            if (requestPaymentMethodErr) {
              console.error(requestPaymentMethodErr);
            } else {
              store.paymentValidated = true;
              console.log(store.paymentValidated);
            }
          });
        });
      });
    },

  },
  created() {
    axios
      .get('http://127.0.0.1:8000/api/trainers/')
      .then(response => {
        this.store.allTrainers = response.data.trainers;
        console.log(this.store.allTrainers)
        this.isLoad = true
      });
      axios
      .get('http://127.0.0.1:8000/api/specializations/')
      .then(response => {
        //this add just name to specs array in store, may need to convert spec to objs. it will broke specs name search idk.
        response.data.specializations.forEach(singleApiSpec => {
          this.store.allSpecs.push(singleApiSpec.name)
        });
        // console.log(this.store.allSpecs);
      })
  },
  
 mounted() {
    this.braintree();
  }
}
</script>



<template>
  

    <HeaderComponent/>
    <div v-if="this.isLoad == false"><LoaderComponent/></div>
    <!--🔰 router view down here, here slides main content -->
    <div v-else>    <router-view></router-view></div>

    

    <!-- <MainComponent/> -->

    <FooterComponent/>
    <div>
        <div id="dropin-wrapper">
        <div id="checkout-message"></div>
        <div id="dropin-container"></div>
        <button id="submit-button">Submit payment</button>
      </div>
    </div>

</template>




<style lang="scss">
@import 'assets/scss/main.scss';
@import 'assets/scss/variables.scss';

// import font from local space 
@font-face {
    font-family: 'buenos aires regular'  ;
    src: url('./assets/scss/font/buenosaires/BuenosAires-Regular.ttf');
}


</style>
