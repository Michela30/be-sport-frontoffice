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
    <div class="pt-4"></div>
    <section class="faq mt-2" id="faq">
        <div class="col-12 col-md-6 container-fluid px-3">
            <h2>
                Frequently Asked Questions
            </h2>

            <hr class="py-3">
            <div class="accordion accordion-flush py-4" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            How do I enroll in a sports course on the platform?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-2">To enroll, go to the Home page, click "Register," and follow the instructions to complete the registration process.</div>
                    </div>
                </div>

                <hr class="py-3">

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            What types of sports courses are available on the platform?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-2">We offer a diverse range, including fitness courses, sport-specific training, group classes, and more. Explore our "Courses" section for the full selection.</div>
                    </div>
                </div>

                <hr class="py-3">

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Is it possible to purchase sponsorships for sports courses on the platform?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-2">Yes, we offer sponsorship opportunities for our sports courses. For details on how to purchase sponsorships and the benefits associated with them, please visit our "Sponsorship Opportunities" section.</div>
                    </div>
                </div>
                <hr>
            </div>
          
        </div>
    </section>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;


.faq {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 80px;
    height: 500px;

}

.small-container {
    margin: 0 auto;
    max-width: 500px;

}


.faq h2 {
    padding-bottom: 40px;
}

.faq-section {
    position: relative;
    display: flex;
    align-items: center;

    a .fa-chevron-down {
        position: absolute;
        right: 30px;
        bottom: 30px;
        font-size: 0.8em;
    }

    p {
        padding-top: 80px;
        padding-bottom: 80px;
    }
}

.accordion-button:not(.collapsed) {
    background-color: rgba(232, 124, 93, 1);
    padding: 5px;
    color: white;
}

.accordion-button:focus {
    border: 1px solid white;
}

.accordion-button {
    background-color: whitesmoke;
}

.accordion-item {
    // se metti important ti sovrascrive lo stile marcio di Bs 🧡
    padding: 20px !important;
    background-color: whitesmoke;
}</style>