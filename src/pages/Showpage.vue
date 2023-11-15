<script>
import axios from 'axios';
import { store } from "../store";

export default {
    data() {
        return {
            singleTrainer: {},

            loadPagefix: false,

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
                .post("https://besports.netsons.org/api/messages",
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
                .post("https://besports.netsons.org/api/votes",
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
                .post("https://besports.netsons.org/api/reviews",
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
            .get(`https://besports.netsons.org/api/trainer/${this.$route.params.slug}`)
            // 'http://localhost:8000/api/trainer/' + this.$route.params.id
            // .get(`http://127.0.0.1:8000/api/trainer/`, {
            //     params: { trainers: this.$route.params.id },
            // })
            .then(response => {
                this.singleTrainer = response.data.trainer;
                // this assign id pf page to fields
                this.email.trainer_id = this.$route.params.slug;
                this.vote.trainer_id = this.$route.params.slug;
                this.review.trainer_id = this.$route.params.slug;
                console.log('questo è il log di show', this.singleTrainer)
                this.loadPagefix = true;
            })

    }

}
</script>


<template>
    <div v-if="this.loadPagefix" class=" my-container">
        <div class="container w-100 m-auto mb-5">
            <div class="row">
                <div class="col-12 col-sm-4 p-2 d-flex flex-column align-items-center justify-content-start pt-5 mt-5">
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
                            <strong>Rating: </strong>
                            <!-- ❌❌❌ ci serve average rating dall'APIIIIIIIIIIIIIIII -->
                            <i v-for="singleStar in Math.floor(singleTrainer.average_rating)" class="fa-solid fa-star" style="color: #ffdd00"></i>
                            <i v-for="singleStar in (5 - Math.floor(singleTrainer.average_rating))" class="fa-regular fa-star"></i>
                        </div>
                        <div class="col text-center">
                            <p>
                               <strong>Phone Number:</strong> {{ singleTrainer.phone_number }}
                            </p>
                        </div>
                        <div class="col text-center">
                            <p> <strong>Email:</strong>  {{ singleTrainer.user.email }}
                            </p>
                        </div>

                        <div class="col text-center">
                            <p><strong>Description:</strong>  {{ singleTrainer.description }}
                            </p>
                        </div>
                        <div class="fw-bold 2h">

                            My specializations:
                        </div>
                        <div class="d-flex flex-wrap d-wrap justify-content-center">
                            <div class="single-Spec m-1 p-1" v-for="(singleSpec, i) in singleTrainer.specializations " :key="i">
                                {{ singleSpec.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-8 pt-5 mt-5">
                    <!-- form message here -->
                    <form class="bg-white rounded p-3 " action="" @submit.prevent="sendEmail(); console.log('premuto bottone email')">
                        <h5 class="m-2">Contact Me here 📨</h5>

                        <div class="form-group  m-2">
                            <label for="name">Name</label>
                            <input v-model="this.email.name" type="text" class="form-control p-1 fs-7" id="name" placeholder="Insert your name" min="5" required>
                        </div>
                        <div class="m-2">
                            <label for="email" class="form-label ">Email address</label>
                            <input v-model="this.email.email" type="email" class="form-control p-1 fs-7" id="email" placeholder="insert your email here" required>
                        </div>
                        <div class="m-2">
                            <label for="mesagge" class="form-label">Type your message here</label>
                            <textarea v-model="this.email.message_text" class="form-control p-1 fs-7" id="mesagge" rows="3" min="15" required>
                            </textarea>
                        </div>

                        <!-- <button type="button" class="btn btn-info text-white fs-7 px-1 mx-2" @click.prevent="sendEmail(); console.log('premuto submit')">Submit</button> -->
                        <button type="submit" class="btn text-white fs-7 py-1 px-2 mx-2">Submit</button>
                    </form>

                    <!-- rating form -->
                    <form class="bg-white rounded p-4 my-2" action="" @submit.prevent="sendRating(); console.log('premuto bottone rating')">
                        <label for="rating" class="form-label">Rate Me ✨</label>
                        <select v-model="this.vote.rating" class="form-select form-select-sm ps-2" aria-label=".form-select-sm example" id="rating">
                            <option value="" disabled selected>Rating</option>
                            <option value="1">⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                        <button type="submit" class="btn text-white fs-7 my-2 py-1 px-2 ">Submit</button>
                    </form>
                    <!-- text review form here -->
                    <form action="" class="bg-white rounded p-4 my-2" @submit.prevent="sendReview(); console.log('premuto bottone review')">
                        <!-- <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2024-12-31" /> -->
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input v-model="this.review.name" type="text" class="form-control p-1 fs-7" id="name" placeholder="Insert your name" min="5" required>
                        </div>
                        <label for="rating" class="form-label ">Write me a review 💛</label>
                        <textarea v-model="this.review.comment" class="form-control " id="exampleFormControlTextarea1" min="15" rows="3" required></textarea>


                        <button type="submit" class="btn text-white fs-7 my-2 py-1 px-2 ">Submit</button>

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
    min-height: calc(100vh - 200px);
    background: rgb(245, 245, 245);
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(249, 221, 215, 1) 100%);
}

.imgWrapper {
    border-radius: 50%;
    border: 5px solid lightcoral;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: top;
}

.card {
    border: 2px solid $mainColor;
}
.single-Spec {
        background-color: #f9ddd75b;
        border: 2px solid $mainColor;
        padding: 2px 7px !important;
        margin: 5px;
        border-radius: 15px;
    }
form {
    border: 2px solid $mainColor;
}

button {
    background-color: $secColor !important;
}
</style>