<script>
//import

export default {
  data() {
    return {
      //dati
    }
  },
  methods: {
    //function
  },
}
</script>


<template>
  <header class="">
    <div class="container-fluid p-3">
      <div class="row align-items-center">
        <div class="col h-100 ">
          <!-- <div class="imgWrapper debug">
            <img src="../assets/imgs/superlogo.png" alt="a" class="float-start">
          </div> -->
           <router-link :to="{ name: 'home' }"><h6 class=" logoTypo">Be<span>Sport</span></h6></router-link>
        </div>
            
        <div class="col h-100">
          <ul class="d-flex justify-content-end ">
            <li>
              <button class="btn btn-light mx-2 px-3 py-1 rounded-4">
                <a class="text-dark px-2" href="">FAQ</a>
              </button>
            </li>
            <li>
              <button class="btn btn-light mx-2 px-3 py-1 rounded-4">
                <!--💢 qua ci va inserito il parametro di ricerca stringa vuota per il search -->
                <router-link class="text-dark" :to="{ name: 'search', params: {spec: ' '} }">Search</router-link>
              </button>
            </li>
            <li>
              <button class="btn btn-light mx-2 px-2 py-1 rounded-4 ">
                <a class="text-dark px-2" href="http://127.0.0.1:8000/login">Login</a>
              </button>
            </li>
            <li>
              <button class="btn btn-light mx-2 px-2 py-1 rounded-4 ">
                <a class="text-dark px-2" href="http://127.0.0.1:8000/register">Register</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

* {
  color: $brightText;
}

h6:hover{
  text-shadow: 2px 2px 2px $darkColor;
}
button{
  
  -webkit-box-shadow: 11px 11px 23px -6px rgba(0,0,0,0.43); 
box-shadow: 11px 11px 23px -6px rgba(0,0,0,0.43);
}

header {
  background: rgb(232, 124, 93);
  background: linear-gradient(0deg, rgba(232, 124, 93, 1) 67%, rgba(205, 97, 66, 1) 95%);
}

.imgWrapper {
  width: 30%;
}

.logoTypo {
  font-size: 1.5rem;
  font-weight: 600;
  color: $brightText;

  span {
    color: $compColor;
  }
}
</style>