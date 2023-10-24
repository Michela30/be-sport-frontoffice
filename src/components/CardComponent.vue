<script>
//import

export default {
    data() {
        return {

        }
    },
    methods: {
        // //function
        // getImagePath: function (image) {
        //     return new URL(image, import.meta.url).href;
        // }
    },
    props: {
        singleTrainer: Object,
    }

}
</script>


<template>
    <div class="card rounded-4 m-2">
        <!-- div for img and absolute text -->
        <div class="card-container ">
            <div v-if="singleTrainer.full_thumb_path">
                <img :src="singleTrainer.full_thumb_path" class="card-img-top rounded-4">
            </div>
            <div v-else>
                <img :src="singleTrainer.picture" class="rounded card-img-top" alt="...">
            </div>

            <h5 class="card-title my-name">{{ singleTrainer.name }}</h5>
            <h5 class="card-title  my-surname">{{ singleTrainer.surname }}</h5>
        </div>
        <!-- start body card -->
        <div class="card-body m-2 text-center ">
            <div class="d-flex justify-content-center p-2">
                <div class="p-1">
                    <i v-for="singleStar in Math.floor(singleTrainer.average_rating)" class="fa-solid fa-star" style="color: #ffdd00"></i>
                    <i v-for="singleStar in (5 - Math.floor(singleTrainer.average_rating))" class="fa-regular fa-star"></i>
                </div>
                <div class="p-1">
                    <!-- Sponsorship: true o false ? -->
                </div>
            </div>

            <div>
                Email: {{ singleTrainer.email }}
            </div>
            <div>
                Presentation: Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
                officiis.
            </div>
            <div class="fw-bold 2h">
                My specializations: 
            </div>
            <div>

            </div>
            <div class="d-flex flex-wrap d-wrap justify-content-center">

                <p class="single-Spec m-1 p-1">{{ singleTrainer.specialization_name }}</p>

            </div>

        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
</style>