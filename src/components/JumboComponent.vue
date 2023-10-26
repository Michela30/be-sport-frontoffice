<script>
//import

   export default {
    data() {
      return{
        //dati
      }
    },
    methods: {
        //function
    },
    components: {
        //dichiarazione
    },
    props:{
        //utilizzo per file padre
    }
    
    
  }
</script>


<template>
<div class=" d-flex justify-content-center my-5 py-5">
    <div class="my-jumbo col-8 px-5">
        <div class="col-xxl-8  ">
            <h2 class="py-5">
                You can become a great tutor too!
            </h2 >
            <p  class="">
                Share your knowledge, live off your passion and become independent
            </p>
            <button  class="my-5 ">
                <a class="text-dark px-2" href="http://127.0.0.1:8000/register">Register</a>
            </button>
        </div>
    </div>
</div>


</template>




<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
.my-jumbo{

    background-image:
    linear-gradient( to right, rgba(2,0,36,1) 47%, rgba(0,212,255,0) 76%),
    url('https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    height: 500px;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    padding: 20px;
    border-radius: 30px;

    h2{
        font-size: 4rem;
        font-weight: bold;
    }
    p{
        font-weight: bold;
        font-size: 1.5rem;
    }
    button{
        font-weight: bold;
        font-size: 1rem;
         background-color:lightcoral;
        border: 2px solid $mainColor;
        // background-color:$mainColor;
        // border: 2px solid lightcoral;
        border-radius: 30px;
        padding: 20px 80px !important;
    }
}

@media screen and (max-width: 1000px) {
   .my-jumbo{
        h2{
            font-size: 3rem;
            
        }
   }
}

@media screen and (max-width: 690px) {
   .my-jumbo{
        p{
           display: none;
           
        }
        button{
            margin-top: 0px !important;
            padding: 10px 40px !important;
        }
   }
}
</style>