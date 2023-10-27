<script>
import { store } from "../store";


export default {
    data() {
        return {
            store,
            //dati
        }
    },
    methods: {
        //function
    },
}
</script>




    



<template>
    <section class="faq">
        <div class="col-12 col-md-6 container-fluid px-3">
            <h2>
                Domande frequenti
            </h2>

            <hr class="py-3">
            <div class="accordion accordion-flush py-4" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                
            <hr class="py-3">

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                
            <hr class="py-3">

                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
                </div>
            <hr class="py-3">
        </div>
    </section>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;


.faq{ 
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 80px;
    height: 500px;

}
.small-container{
    margin: 0 auto;
    max-width: 500px;
  
}


.faq h2{
    padding-bottom: 40px;
}

.faq-section{
    position: relative;
    display: flex;
    align-items: center;
    a .fa-chevron-down{
    position: absolute;
    right: 30px;
    bottom: 30px;
    font-size: 0.8em;
}
p{
    padding-top: 80px;
    padding-bottom: 80px;
}
}

.accordion-button:not(.collapsed){
    background-color: rgba(232, 124, 93, 1);
    padding: 5px;
    color: white;
}
.accordion-button:focus {
    border: 1px solid white;
}

.accordion-button{
    background-color: whitesmoke;
}

.accordion-item{
    padding: 20px;
    background-color: whitesmoke;
}
</style>