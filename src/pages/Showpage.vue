<script>
import axios from 'axios';
import { store } from "../store";

export default {
    data() {
        return {
            singleTrainer: '',

            email: {
                trainer_id: '',
                name: '',
                email: '',
                message_text: '',
            },
            vote: {
                trainer_id: '',
                date: '',
                rating: '',
            },
            review: {
                trainer_id: '',
                name: '',
                date: '',
                comment: '',
            }


        }
    },
    methods: {

        getDate(objDate) {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;
            console.log('data aggiornata nel', objDate)
            objDate = today
            // this.vote.date = today
        },
        sendEmail() {
            axios
                .post("http://127.0.0.1:8000/api/messages",
                    this.email, {
                    header: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                )
                .then(response => {
                    console.log('chiamata post per email', response)
                    this.email.name = ''
                    this.email.email = ''
                    this.email.message_text = ''
                })
                .catch(err => {
                    console.log(err.response.data);
                })

        },
        sendRating() {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            // ----------------------------------
            today = yyyy + '-' + mm + '-' + dd;
            this.vote.date = today

            axios
                .post("http://127.0.0.1:8000/api/votes",
                    this.vote, {
                    header: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                )
                .then(response => {
                    console.log('this.vote', this.vote);
                    console.log('chiamata post per rating', response)
                    this.vote.date = ''
                    this.vote.rating = ''
                })
                .catch(err => {
                    console.log(err.response.data);
                })

        },
        sendReview() {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            this.review.date = today
            // ----------------------------------
            axios
                .post("http://127.0.0.1:8000/api/reviews",
                    this.review, {
                    header: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                )
                .then(response => {
                    console.log('this.review', this.review);
                    console.log('chiamata post per review', response)
                    this.review.name = ''
                    this.review.date = ''
                    this.review.comment = ''
                })
                .catch(err => {
                    console.log(err.response.data);
                })
        }
    },
    created() {
        // here fires axios call
        axios
            .get(`http://127.0.0.1:8000/api/trainer/${this.$route.params.id}`)
            // 'http://localhost:8000/api/trainer/' + this.$route.params.id
            // .get(`http://127.0.0.1:8000/api/trainer/`, {
            //     params: { trainers: this.$route.params.id },
            // })
            .then(response => {
                this.singleTrainer = response.data.trainer;
                // this assign id pf page to fields
                this.email.trainer_id = this.$route.params.id;
                this.vote.trainer_id = this.$route.params.id;
                this.review.trainer_id = this.$route.params.id;
            })

    }

}
</script>


<template>
    <div class=" my-container">
        <div class="container  w-100 m-auto">
            <div class="row">
                 <div class="col-12 col-sm-4 p-2 d-flex flex-column align-items-center justify-content-start ">
                        <div class="card d-flex flex-column align-items-center justify-content-center p-3">
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
                <div class="col-12 col-sm-8">
                    <!-- form message here -->
                    <form class="bg-white rounded p-3 m-2" action="" @submit.prevent="sendEmail(); console.log('premuto bottone email')">
                        <h5 class="m-2">Contact Me here 📨</h5>

                        <div class="form-group  m-2">
                            <label for="name">Name</label>
                            <input v-model="this.email.name" type="text" class="form-control p-1 fs-7" id="name" placeholder="Insert your name">
                        </div>
                        <div class="m-2">
                            <label for="email" class="form-label ">Email address</label>
                            <input v-model="this.email.email" type="email" class="form-control p-1 fs-7" id="email" placeholder="insert your email here">
                        </div>
                        <div class="m-2">
                            <label for="mesagge" class="form-label">Type your message here</label>
                            <textarea v-model="this.email.message_text" class="form-control p-1 fs-7" id="mesagge" rows="3">
                            </textarea>
                        </div>

                        <!-- <button type="button" class="btn btn-info text-white fs-7 px-1 mx-2" @click.prevent="sendEmail(); console.log('premuto submit')">Submit</button> -->
                        <button type="submit" class="btn btn-info text-white fs-7 px-1 mx-2">Submit</button>
                    </form>

                    <!-- rating form -->
                    <form class="bg-white rounded p-4 m-2" action="" @submit.prevent="sendRating(); console.log('premuto bottone rating')">
                        <label for="rating" class="form-label">Rate Me ✨</label>
                        <select v-model="this.vote.rating" class="form-select form-select-sm" aria-label=".form-select-sm example" id="rating">
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                        <button type="submit" class="btn btn-info text-white fs-7 my-2 px-1 ">Submit</button>
                    </form>
                    <!-- text review form here -->
                    <form action="" class="bg-white rounded p-4 m-2" @submit.prevent="sendReview(); console.log('premuto bottone review')">
                        <!-- <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2024-12-31" /> -->
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input v-model="this.review.name" type="text" class="form-control p-1 fs-7" id="name" placeholder="Insert your name">
                        </div>
                        <label for="rating" class="form-label ">Write me a review 💛</label>
                        <textarea v-model="this.review.comment" class="form-control " id="exampleFormControlTextarea1" rows="3"></textarea>


                        <button type="submit" class="btn btn-info text-white fs-7 my-2 px-1 ">Submit</button>

                    </form>
                </div>

                <!-- card del singolo trainer -->
               
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