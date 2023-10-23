<script>
import axios from 'axios';
import { store } from "../store";

export default {
    data() {
        return {
            store,
            inputSearch: '',
            foundSpecs: store.allSpecs,
            showSpecs: false,
            foundedTrainers: {},
            selectedRating: 0,
            selectedReview: 0,
        }
    },
    methods: {
        sortData() {
            // Sort the trainers based on average rating (descending order)
            this.foundedTrainers.sort((a, b) => b.average_rating - a.average_rating);
            console.log('Sorted foundedTrainers:', this.foundedTrainers);
        },
        searchSpec() {
            this.foundSpecs = [];
            this.store.allSpecs.forEach((singleSpecs, i) => {
                if (singleSpecs.toLowerCase().includes(this.inputSearch.toLowerCase())) {
                    this.foundSpecs.push(singleSpecs);
                    console.log('trovata la spec');
                }
            });
        },
        showSpecial() {
            this.showSpecs = true
        },
        //❌📛🛑 need to fix this, wont fire on load
        searchBySpecs() {
            axios
                .get(`http://127.0.0.1:8000/api/trainerfilter/`, {
                    params: { specialization: this.$route.params.spec },
                })
                .then(response => {
                    this.foundedTrainers = response.data.results;
                    // Sort the trainers based on average rating (descending order)
                    this.sortData();
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
    },
    created() {
        axios
            .get(`http://127.0.0.1:8000/api/trainerfilter/`, {
                params: { specialization: this.$route.params.spec },
            })
            .then(response => {
                this.foundedTrainers = response.data.trainer;
                console.log('questo è larray di trainers trovati ->', this.foundedTrainers);
                // Sort the trainers based on average rating (descending order)
                this.sortData();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },
    mounted() {
    }
}
</script>



<template>
    <div class="h-100 my-container ">
        <div class="container  w-100 m-auto ">
            <!--💱 searchbars all here -->
            <div class="row  justify-content-center pt-5 mt-5 ">
                <div class="col d-flex justify-content-center">
                    <div class="bg-white d-flex p-2 w-75  rounded-4" @click="showSpecial()">
                        <input @keyup="searchSpec()" v-model="inputSearch" type="text" class="form-control border-0" placeholder="Type what would you like to train?" aria-label="Username" aria-describedby="addon-wrapping">
                        <!--🔽 Lancia chiamata API 🔽 -->
                        <button class="btn search-button p-2 rounded-3 mx-1">
                            <!--💚 this fire the search -->
                            <router-link v-if="this.inputSearch" class="text-dark" :to="{ name: 'search', params: { spec: this.inputSearch } }">Search</router-link>
                            <div v-else>Search</div>
                        </button>
                    </div>
                </div>
                <!-- {{ foundSpecs }} -->
                <div class="row justify-content-center pt-1">
                    <div class=" col-12 w-75 d-flex bg-white rounded ">
                        <div class="" v-if="this.showSpecs">
                            <div v-for="singleSpecs in foundSpecs">
                                <div @click="this.inputSearch = singleSpecs" class=" p-2">
                                    {{ singleSpecs }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 🍳🍕 lower searchbars here -->
            <div class="row ">
                <h4 class="fs-6 px-2">Filtra per:</h4>
                <div class="col-6 p-2">
                    <select v-model="this.selectedRating" class="form-select">
                        <option value="0" selected>Show all </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                    </select>

                </div>
                <div class="col-6 p-2">
                    <select v-model="this.selectedReview" class="form-select">
                        <option value="0" selected>Show all </option>
                        <option value="5">At least 5 reviews</option>
                        <option value="10">At least 10 reviews</option>
                        <option value="15">At least 15 reviews</option>
                        <option value="20">At least 20 reviews</option>
                        <option value="25">At least 25 reviews</option>
                    </select>
                </div>
            </div>
            <!-- here shows all trainer for that specific spec -->
            <div class="row" v-if="selectedRating == 0 && selectedReview == 0">
                <!-- <div class="col-4 " style="width: 18rem;" v-for="(singleTrainer, i) in foundedTrainers" :key="i" 
                :class="(selectedRating == Math.floor(singleTrainer.average_rating)) ? '' : 'hidden'"> -->
                <div class="col-4 " style="width: 18rem;" v-for="(singleTrainer, i) in foundedTrainers" :key="i" >
                        <router-link class="text-dark" :to="{ name: 'show', params: { id: singleTrainer.id } }">
                            <div class="card m-2">
    
                                <!-- div for img and absolute text -->
                                <div class="card-container ">
                                    <!-- <img :src="singleTrainer.picture" class="rounded card-img-top" alt="..."> -->
                                    <div v-if="singleTrainer.full_thumb_path">
                                        <img :src="singleTrainer.full_thumb_path" class="card-img-top">
                                    </div>
                                    <div v-else>
                                        <img :src="singleTrainer.picture" class="rounded card-img-top" alt="...">
                                    </div>
    
                                    <h5 class="card-title my-name">{{ singleTrainer.name }}</h5>
                                    <h5 class="card-title  my-surname">{{ singleTrainer.surname }}</h5>
                                </div>
                                <!-- start body card -->
                                <div class="card-body m-2 text-center ">
                                    <div class="d-flex p-2">
                                        <div class="p-1">
                                            <i v-for="singleStar in Math.floor(singleTrainer.average_rating)" class="fa-solid fa-star" style="color: #ffdd00"></i>
                                            <i v-for="singleStar in (5 - Math.floor(singleTrainer.average_rating))" class="fa-regular fa-star"></i>
                                            <!-- Rating:<i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                                            <i class="fa-solid fa-star" style="color: #ffdd00;"></i> -->
    
                                        </div>
                                        <div class="p-1">
                                            Sponsorship:
                                        </div>
                                    </div>
    
                                    <div>
                                        email : {{ singleTrainer.email }}
                                        
                                    </div>
                                    <div>
                                        presentazione : Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
                                        officiis.
                                    </div>
                                    <!-- perchè non funziona il bold? -->
                                    <div class="fw-bold 2h">
                                        my specializations:
                                    </div>
                                    <div>
                                        <!-- test review down here ✝
                                    review {{ singleTrainer.reviews }} -->
                                    </div>
                                    <div class="d-flex flex-wrap d-wrap">
                                        <!--💥💥 need to fix we need from api all specs from specific trainer query -->
                                        <p class="single-Spec m-1 p-1">{{ singleTrainer.specialization_name }}</p>
                                        <!-- <div class="single-Spec m-1 p-1"  v-for="(singleSpec, i) in singleTrainer.specializations" :key="i">
                                        {{ singleSpec.name }}
                                    </div> -->
                                    </div>
    
                                    <!-- rotta vue allo show qui poi -->
    
                                </div>
                            </div>
                        </router-link>               
                </div>
            </div>

            <div class="row" v-else>
                <h5>SIAMO NEL V-ELSE</h5>
                <!-- <div class="col-4 " style="width: 18rem;" v-for="(singleTrainer, i) in foundedTrainers" :key="i" 
                :class="(selectedRating == Math.floor(singleTrainer.average_rating)) ? '' : 'hidden'"> -->
                    <div class="col-4 " style="width: 18rem;" v-for="(singleTrainer, i) in foundedTrainers" :key="i"
                    :class="(selectedRating == Math.floor(singleTrainer.average_rating) || selectedReview >= Math.floor(singleTrainer.reviews.length) ) ? '' : 'hidden'" >
                            <router-link class="text-dark" :to="{ name: 'show', params: { id: singleTrainer.id } }">
                                <div class="card m-2">
                                    
                                    <!-- div for img and absolute text -->
                                    <div class="card-container ">
                                        <!-- <img :src="singleTrainer.picture" class="rounded card-img-top" alt="..."> -->
                                        <div v-if="singleTrainer.full_thumb_path">
                                            <img :src="singleTrainer.full_thumb_path" class="card-img-top">
                                        </div>
                                        <div v-else>
                                            <img :src="singleTrainer.picture" class="rounded card-img-top" alt="...">
                                        </div>
    
                                        <h5 class="card-title my-name">{{ singleTrainer.name }}</h5>
                                        <h5 class="card-title  my-surname">{{ singleTrainer.surname }}</h5>
                                        <h5>{{ singleTrainer.reviews.length }}</h5>
                                    </div>
                                    <!-- start body card -->
                                    <div class="card-body m-2 text-center ">
                                        <div class="d-flex p-2">
                                            <div class="p-1">
                                                <i v-for="singleStar in voteDivider(singleTrainer.average_rating)" class="fa-solid fa-star" style="color: #ffdd00"></i>
                                                <i v-for="singleStar in (5 - voteDivider(singleTrainer.average_rating))" class="fa-regular fa-star"></i>
                                                <!-- Rating:<i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                                            <i class="fa-solid fa-star" style="color: #ffdd00;"></i> -->
    
                                            </div>
                                            <div class="p-1">
                                                Sponsorship:
                                            </div>
                                        </div>
    
                                        <div>
                                            email : {{ singleTrainer.email }}
                                        </div>
                                        <div>
                                            presentazione : Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
                                            officiis.
                                        </div>
                                        <!-- perchè non funziona il bold? -->
                                        <div class="fw-bold 2h">
                                            my specializations:
                                        </div>
                                        <div>
                                            <!-- test review down here ✝
                                    review {{ singleTrainer.reviews }} -->
                                        </div>
                                        <div class="d-flex flex-wrap d-wrap">
                                            <!--💥💥 need to fix we need from api all specs from specific trainer query -->
                                            <p class="single-Spec m-1 p-1">{{ singleTrainer.specialization_name }}</p>
                                            <!-- <div class="single-Spec m-1 p-1"  v-for="(singleSpec, i) in singleTrainer.specializations" :key="i">
                                        {{ singleSpec.name }}
                                    </div> -->
                                        </div>
    
                                        <!-- rotta vue allo show qui poi -->
    
                                    </div>
                                </div>
                            </router-link>               
                    </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

.hidden {
    display: none;
}

.my-container {
    background-color: $mainColor;
    min-height: calc(100vh - 260px);
}

.search-button {
    background-color: rgb(253, 215, 215);
}

.search-bar {
    -webkit-box-shadow: 11px 11px 23px -6px $darkColor;
    box-shadow: 11px 11px 23px -6px $darkColor;
}

.thumbnail:hover {
    background-color: lightgray;
}

.card:hover {
    -webkit-box-shadow: 11px 11px 23px -6px $darkColor;
    box-shadow: 11px 11px 23px -6px $darkColor;
    transform: scale(1.03);
    transition: 0.7s;

}

.card {
    .search-button:hover {
        background-color: lightcoral;
    }

    min-height: 95%;
    margin-bottom: 20px;

    .single-Spec {
        background-color: lightcoral;
        padding: 5px;
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