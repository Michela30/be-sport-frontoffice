<script>
import axios from 'axios';
import { store } from "../store";

export default {
    data() {
        return {
            singleTrainer: '',
            email: {
                name: '',
                email: '',
                message_text: '',    
            },
            vote: {
                rating: '',
            },
            review: {
                name: '',
                date: '',
                comment: '' ,
            }


        }
    },
    methods: {
        sendEmail() {
             console.log(this.email);
            axios
                .post("http://127.0.0.1:8000/api/messages",
                    this.email
                )
                .then(response => {    
                    console.log('chiamata post per email', response)
                })

        },
        // mancano i v-model su queste 💥💢💌💟
        sendRating() {
            console.log(this.email);
            axios
                .post("http://127.0.0.1:8000/api/votes",
                    this.vote
                )
                .then(response => {
                    console.log('chiamata post per email', response)
                })

        },
        sendReview() {
            console.log(this.email);
            axios
                .post("http://127.0.0.1:8000/api/reviews",
                    this.review
                )
                .then(response => {
                    console.log('chiamata post per email', response)
                })
        }
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
                <div class="col-8">
                    <!-- form message here -->
                    <form class="bg-white rounded p-3 m-2" action="" >
                        <h5 class="m-2">Contact Me here 📨</h5>
                        <div class="form-group  m-2">
                            <label for="name">Name</label>
                            <input v-model="this.email.name" type="text" class="form-control p-1 fs-7" id="name" placeholder="Insert your name">
                        </div>
                        <div class="m-2">
                            <label for="email" class="form-label ">Email address</label>
                            <input v-model="this.email.email"  type="email" class="form-control p-1 fs-7" id="email" placeholder="insert your email here">
                        </div>
                        <div class="m-2">
                            <label for="mesagge" class="form-label">Type your message here</label>
                            <textarea v-model="this.email.message_text"  class="form-control p-1 fs-7" id="mesagge" rows="3">
                            </textarea>
                        </div>

                        <button type="button" class="btn btn-info text-white fs-7 px-1 mx-2" @click.prevent="sendEmail(), console.log('premuto submit')">Submit</button>
                    </form>

                    <!-- rating form -->
                    <form class="bg-white rounded p-3 m-2" action="">
                        <label for="rating" class="form-label">Rate Me ✨</label>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example" id="rating">
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option selected value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                        <button type="button" class="btn btn-info text-white fs-7 px-1 ">Submit</button>
                    </form>
                    <!-- text review form here -->
                    <form action="" class="bg-white rounded p-3 m-2">
                        <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control p-1 fs-7" id="name" placeholder="Insert your name">
                            </div>
                        <label for="rating" class="form-label ">Write me a review 💛</label>
                        <textarea class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>

                        
                            <button type="button" class="btn btn-info text-white fs-7 px-1 ">Submit</button>

                    </form>
                </div>

                <div class="col-4 p-2 d-flex flex-column align-items-center justify-content-center">
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
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: top;
}
</style>