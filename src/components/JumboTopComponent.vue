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
<div class=" d-flex justify-content-center  py-5">
    <div class="my-jumbo col-12 px-5 pt-5 d-flex align-items-center">
        <div class="col-xxl-8  ">
            <h2 class="py-5">
            <span> Find the perfect trainer!</span>
            </h2 >
            <p  class="">
                Online or in-person, 
                <br>
                Make your choice from <span> millions of tutors</span>
            </p>
           
        </div>
    </div>
</div>


</template>




<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
.my-jumbo{

    background-image:
    linear-gradient( to right, rgb(33, 0, 0) 40%, rgba(0,212,255,0) 70%),
    url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    height: 700px;
    background-repeat: no-repeat;
    background-position: right;
    color: white;
    padding: 20px;

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
    span{
        color: rgba(232, 124, 93, 1);
    }
}
 
@media screen and (min-width: 425px) {
    
.my-jumbo{
    background-image:
    linear-gradient( to right, rgb(51, 5, 5) 55%, rgba(0,212,255,0) 90%),
    url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    height: 700px;
    background-repeat: no-repeat;
    background-position: left;
    color: white;
    padding: 20px;
    p{
        font-weight: bold;
        font-size: 1.5rem;
        word-wrap: break-word;
    }
}
}


@media screen and (min-width: 768px) {
    .my-jumbo{
        background-image:
        linear-gradient( to right, rgb(33, 0, 0) 40%, rgba(0,212,255,0) 70%),
        url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        height: 700px;
        background-repeat: no-repeat;
        background-position: right;
        color: white;
        padding: 20px;
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
        button{
            margin-top: 0px !important;
            padding: 10px 40px !important;
        }
   }
</style>