<script>
// import
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import axios from 'axios';
import { store } from './store';

export default {
  data() {
    return {
      store,
      // objSpec: '',
    }
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  methods: {

  },
  created() {
    axios
      .get('http://127.0.0.1:8000/api/trainers/')
      .then(response => {
        this.store.allTrainers = response.data.trainers;
        console.log(this.store.allTrainers)
      });
      axios
      .get('http://127.0.0.1:8000/api/specializations/')
      .then(response => {
        //this add just name to specs array in store, may need to convert spec to objs. it will broke specs name search idk.
        response.data.specializations.forEach(singleApiSpec => {
          this.store.allSpecs.push(singleApiSpec.name)
        });
        console.log(this.store.allSpecs);
      })
  },
  
  mounted() {

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
@import 'assets/scss/main.scss';
@import 'assets/scss/variables.scss';

// import font from local space 
@font-face {
    font-family: 'buenos aires regular'  ;
    src: url('./assets/scss/font/buenosaires/BuenosAires-Regular.ttf');
}
</style>
