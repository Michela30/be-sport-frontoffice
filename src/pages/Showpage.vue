<script>
import axios from 'axios';
import { store } from "../store";

export default {
    data() {
        return {
            //dati
            singleTrainer: null
        }
    },
    methods: {
    },
    created() {
        console.log('http://127.0.0.1:8000/api/trainer/' + this.$route.params.id);
        // here fires axios call
        axios
            .get(`http://127.0.0.1:8000/api/trainer/${this.$route.params.id}`)
            // 'http://localhost:8000/api/trainer/' + this.$route.params.id
            // .get(`http://127.0.0.1:8000/api/trainer/`, {
            //     params: { trainers: this.$route.params.id },
            // })
            .then(response => {
                this.singleTrainer = response.data.trainer;

                console.log('this.singleTrainer', this.singleTrainer)
            })
    }

}
</script>


<template>
    <div class="container mx-auto my-5">
        <div class="row">
            <!-- {{ singleTrainer }} -->

            <div class="col-12 d-flex justify-content-center">
                <div class="imgWrapper w-50">
                    <div v-if="singleTrainer.full_thumb_path">
                        <img :src="singleTrainer.full_thumb_path" class="card-img-top">
                    </div>
                    <div v-else>
                        <img :src="singleTrainer.picture" class="rounded card-img-top" alt="...">
                    </div>

                </div>
            </div>
            <!-- data -->
            <div class="col-12">
                <h3 class="text-center">{{ singleTrainer.user.name }} {{ singleTrainer.user.surname }}</h3>
            </div>
            <!-- rating -->
            <div class="col-12 p-1 text-center">
                Rating:<i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                <i class="fa-solid fa-star" style="color: #ffdd00;"></i>
            </div>
            <div class="col-12 text-center">
                <p>
                    Phone Number: {{ singleTrainer.phone_number }}
                </p>
            </div>
            <div class="col-12 text-center">
                    <p>  mail: {{ singleTrainer.user.email }}
                    </p>
                </div>

                <div class="col-12 text-center">
                        <p>  Description: {{ singleTrainer.description }}
                        </p>
                    </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
</style>