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
    },
    created() {
        console.log(this.singleTrainer.expiring_date)
    }

}
</script>


<template>
    <div class="col-8 col-sm-6 col-md-4 col-lg-3 py-2">
         <router-link :to="{ name: 'show', params: { slug: singleTrainer.slug } }">
            <div class="card card-sponsored rounded-4 mx-2 p-3" >
                <!-- div for img and absolute text -->
                <div class="card-container">
                    <!-- badge stellina -->
                    <div class="badge">
                        <i class="fa-solid fa-certificate fa-flip" style="color: #04d4cd;"></i>
                    </div>
    
                    <div v-if="singleTrainer.full_thumb_path">
                        <div class="card-img-box">
                            <img :src="singleTrainer.full_thumb_path" class="card-img-top rounded-4">
                        </div>
                    </div>
                    <div v-else>
                        <div class="card-img-box">
                            <img :src="singleTrainer.picture" class="rounded card-img-top" alt="...">
                        </div>
                    </div>
    
                    <h5 class="card-title my-name">{{ singleTrainer.name }}</h5>
                    <h5 class="card-title  my-surname">{{ singleTrainer.surname }}</h5>
                </div>
                <!-- start body card -->
                <div class="card-body m-2 text-center ">
                    <div class="d-flex justify-content-center p-2">
                        <div class="p-1">
                            <i v-for="singleStar in Math.floor(singleTrainer.average_rating)" class="fa-solid fa-star" style="color: #ffe100;"></i>
                            <i v-for="singleStar in (5 - Math.floor(singleTrainer.average_rating))" class="fa-regular fa-star"></i>
                        </div>
                    </div>
                    <div v-if="singleTrainer.email">
                        <strong>Email:</strong> {{ singleTrainer.email }}
                    </div>
                    <div v-else>
                        <strong>Email:</strong> {{ singleTrainer.user.email }}
                    </div>
    
                    <div>
                        <strong>Presentation:</strong>
                        {{ singleTrainer.description }}
                    </div>
                
    
                    <div v-if="singleTrainer.specializations || singleTrainer.specialization_name" class="pt-2">
                
                        <div class="fw-bold 2h">
                            My specializations:
                        </div>
                    
                        <div class="d-flex flex-wrap d-wrap justify-content-center">
    
                            <div v-if="singleTrainer.specializations"  class="d-flex flex-wrap d-wrap justify-content-center">
                                <div class="single-Spec m-1 p-1" v-for="singleSpec in singleTrainer.specializations">
                                    {{ singleSpec.name }} 
                                </div>
                            </div>
    
                            <p v-else class="single-Spec m-1 p-1">{{ singleTrainer.specialization_name }}</p>
    
                        </div>
                    </div>
                
                </div>
            </div>
        </router-link>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;


.card-sponsored {
    cursor: pointer;
    min-height: 100%;
    padding: 3px !important;
    border: 1px solid #04d4cd;

    .card-img-box{
        width: auto;
        height: 200px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    }

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

    .badge {
        position: absolute;
        top: -10px;
        left: -10px;
        font-size: 2.5em;
    }
}

.card:hover {
    cursor: pointer !important;
    -webkit-box-shadow: 11px 11px 23px -6px $darkColor;
    box-shadow: 11px 11px 23px -6px $darkColor;
    transform: scale(1.03);
    transition: 0.4s;

}
</style>