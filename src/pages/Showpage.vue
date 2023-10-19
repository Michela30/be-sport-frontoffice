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
    <div class=" my-container">

        <div class="container  w-100 m-auto">
            <div class="row">
                <!-- {{ singleTrainer }} -->
                <div class="col-8">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-center">
                    <div class=" w-50 ">
                        <div class="d-flex justify-content-center" v-if="singleTrainer.full_thumb_path">
                            <div class="">
                                <img :src="singleTrainer.full_thumb_path" class="card-img-top imgWrapper ">
                            </div>
                        </div>
                        <div v-else>
                            <div class="">
                                <img :src="singleTrainer.picture" class="rounded card-img-top imgWrapper " alt="...">
                            </div>

                        </div>

                    </div>
                    <!-- data -->
                    <div class="col">
                        <h3 class="text-center">{{ singleTrainer.user.name }} {{ singleTrainer.user.surname }}</h3>
                    </div>
                    <!-- rating -->
                    <div class="col p-1 text-center">
                        Rating:<i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                        <i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                    </div>
                    <div class="col text-center">
                        <p>
                            Phone Number: {{ singleTrainer.phone_number }}
                        </p>
                    </div>
                    <div class="col text-center">
                        <p> mail: {{ singleTrainer.user.email }}
                        </p>
                    </div>

                    <div class="col text-center">
                        <p> Description: {{ singleTrainer.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>




    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

.my-container {
    min-height: calc(100vh - 260px);
    background: rgb(245, 245, 245);
    background: linear-gradient(0deg, rgba(245, 245, 245, 1) 42%, rgba(242, 221, 215, 1) 63%, rgba(240, 201, 190, 1) 74%, rgba(236, 164, 143, 1) 91%, rgba(235, 153, 129, 1) 100%);
}

.imgWrapper {
    border-radius: 50%;
    border: 5px solid lightcoral;
    width: 200px;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: top;
}
</style>