<script>
import LoaderComponent from '../components/LoaderComponent.vue';
import CardComponent from '../components/CardComponent.vue';
import CardSponsoredComp from '../components/CardSponsoredComp.vue';
import axios from 'axios';
import { store } from "../store";

export default {
    components: {
        LoaderComponent,
        CardComponent,
        CardSponsoredComp,
    },
    data() {
        return {
            store,
            inputSearch: '',
            foundSpecs: store.allSpecs,
            showSpecs: false,
            foundedTrainers: {},
            selectedRating: 0,
            selectedReview: 0,
            isLoad: false,
            showFilter: false,
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
        updateSearch() {
            axios
                .get(`http://127.0.0.1:8000/api/trainerfilter/`, {
                    // params: { specialization: this.$route.params.spec },
                    params: { specialization: this.inputSearch },
                })
                .then(response => {
                    this.foundedTrainers = response.data.trainer;
                    console.log('questo è larray di trainers aggiornati ->', this.foundedTrainers);
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
                this.isLoad = true
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
    <div v-if="isLoad == false">

    </div>
    <div class=" my-container ">
        <div class="container  w-100 m-auto ">
            <!--💱 searchbars all here -->
            <div class="row justify-content-center pt-5 mt-5 mb-3 " :class="!showFilter ? 'pb-5' : ''">
                <div class="col d-flex justify-content-center">
                    <div class="bg-white d-flex p-2 w-75 rounded-4" id="search" @click="this.showSpecs = !this.showSpecs, console.log('premuto bottone dentro')">
                        <input @keyup="searchSpec()" v-model="inputSearch" type="text" class="form-control border-0" placeholder="Type what would you like to train?">
                        <!--🔽 update chiamata API 🔽 -->
                        <button @click="updateSearch()" class="btn search-button p-2 rounded-3 mx-1">Search</button>
                    </div>
                    <!-- bottone filtri -->
                    <button class="btn btn-light p-2 rounded-3 mx-3 filterButton" @click="this.showFilter = !this.showFilter"><i class="fa-solid fa-filter text-white"></i></button>

                </div>

                <div class="row justify-content-center pt-1">
                    <transition name="fade">
                        <div class=" col-12 w-75 me-5 drop-down-specs d-flex justify-content-center bg-white rounded " v-if="this.showSpecs">
                            <div class="w-100">
                                <div v-for="singleSpecs in foundSpecs">
                                    <div @click="this.inputSearch = singleSpecs" class=" cursor-pointer bg-hover p-2">
                                        <p>
                                            {{ singleSpecs }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <!-- 🍳🍕 lower searchbars here -->
            <div v-if="this.showFilter" class="d-flex justify-content-center w-50 m-auto pb-2">
                <div class="col-6 p-2">
                    <select v-model="this.selectedRating" class="form-select p-1 ps-3 text-grey fs-6">
                        <option value="0" selected>All Rating</option>
                        <option value="1">⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>

                </div>
                <div class="col-6 p-2">
                    <select v-model="this.selectedReview" class="form-select p-1 text-grey fs-6">
                        <option class="" value="0" selected>Any Reviews Number</option>
                        <option class="text-black" value="5">At least 5 reviews</option>
                        <option class="text-black" value="10">At least 10 reviews</option>
                        <option class="text-black" value="15">At least 15 reviews</option>
                        <option class="text-black" value="20">At least 20 reviews</option>
                        <option class="text-black" value="25">At least 25 reviews</option>
                    </select>
                </div>
            </div>
            
            <div class="row justify-content-center">
                <template v-for="(singleTrainer, i) in foundedTrainers" :key="i">
                    <CardSponsoredComp :singleTrainer="singleTrainer" v-if="singleTrainer.expiring_date" />
                </template>
            </div>
            <!-- here shows all trainer for that specific spec -->
            <!-- primo if qua 💚-->
            <div class="row justify-content-center pb-5" v-if="selectedRating == 0 && selectedReview == 0">
                <!-- <h3>siamo nel v-if</h3> -->
                <template v-for="(singleTrainer, i) in foundedTrainers" :key="i">
                        <CardComponent :singleTrainer="singleTrainer" />
                </template>
            </div>

            <!--✅ primo v-else-if se selezionata solo la prima select  -->
            <div class="row justify-content-center  pb-5" v-else-if="selectedRating != 0 && selectedReview == 0">
                <!-- <h3>siamo nel primo v-else-if</h3> -->
                <template v-for="(singleTrainer, i) in foundedTrainers" :key="i" :class="(selectedRating <= Math.floor(singleTrainer.average_rating)) ? '' : 'hidden'">
                    <CardComponent :singleTrainer="singleTrainer" />
                </template>
            </div>

            <!--♌ secondo v-else-if se selezionata solo la seconda selected  -->
            <div class="row justify-content-center  pb-5" v-else-if="selectedReview != 0 && selectedRating == 0">
                <!-- <h3>siamo nel secondo v-else-if</h3> -->
                <template v-for="(singleTrainer, i) in foundedTrainers" :key="i" :class="(selectedReview <= Math.floor(singleTrainer.reviews.length)) ? '' : 'hidden'">
                    <CardComponent :singleTrainer="singleTrainer" />
                </template>
            </div>

            <!-- ultimo else qua 💜 -->
            <div class="row justify-content-center  pb-5" v-else>
                <!-- <h3>siamo nel v-else finale</h3> -->
                <template v-for="(singleTrainer, i) in foundedTrainers" :key="i" :class="(selectedRating <= Math.floor(singleTrainer.average_rating) && selectedReview <= Math.floor(singleTrainer.reviews.length)) ? '' : 'hidden'">
                    <CardComponent :singleTrainer="singleTrainer" />
                </template>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

.text-grey {
    color: rgb(98, 98, 98) !important;
}

.text-dark {
    color: black
}

.hidden {
    display: none;
}

.my-container {
    background-color: $mainColor;
    min-height: calc(100vh - 200px);
}

.search-button {
    background-color: rgb(253, 215, 215);
}

.filterButton {
    border: 4px solid white;
    background-color: rgba(232, 123, 93, 0.581);
}

.filterButton:hover {
    background-color: rgb(255, 206, 185) !important;
}

.bg-hover:hover {
    background-color: rgba(210, 210, 210, 0.279);
}


.drop-down-specs {
    margin-right: 70px !important;
}

// vue transition here ----------
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

// vue transition here ----------
</style>