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
               <strong>Email:</strong>  {{ singleTrainer.email }}
            </div>
            <div>
                <strong>Presentation:</strong>
                 {{ singleTrainer.description }} 
            </div>
            <div class="fw-bold 2h">
                My specializations: 
            </div>
            <div>

            </div>
            <!-- <div class="d-flex flex-wrap d-wrap justify-content-center">

                <p class="single-Spec m-1 p-1">{{ singleTrainer.specialization_name }}</p>

            </div> -->
            <div class="d-flex flex-wrap d-wrap justify-content-center">
                    <div v-if="singleTrainer.specializations">
                        <div class="single-Spec m-1 p-1" v-for="singleSpec in singleTrainer.specializations">
                            {{ singleSpec.name }} </div>
                    </div>

                    <p v-else class="single-Spec m-1 p-1">{{ singleTrainer.specialization_name }}</p>

                </div>

        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
.card:hover {
    cursor: pointer !important;
    -webkit-box-shadow: 11px 11px 23px -6px $darkColor;
    box-shadow: 11px 11px 23px -6px $darkColor;
    transform: scale(1.03);
    transition: 0.4s;

}

.card {
    cursor: pointer;

    min-height: 95%;
    margin-bottom: 20px;

    .single-Spec {
        background-color: #f9ddd75b;
        border: 2px solid $mainColor;
        padding: 2px 7px !important;
        margin: 5px;
        border-radius: 15px;
    }

    .card-container {
        position: relative;
    }

    img {
        max-height: 200px;
        object-fit: cover;
        object-position: top;
    }

    .my-name {
        position: absolute;
        bottom: 29px;
        left: 5px;
        font-weight: bold;
        color: $brightText;
        text-shadow: 2px 2px 2px $darkColor;
    }

    .my-surname {
        position: absolute;
        bottom: 10px;
        left: 5px;
        font-weight: bold;
        color: $brightText;
        text-shadow: 2px 2px 2px $darkColor;
    }
}
</style>