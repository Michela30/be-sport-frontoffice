<script>
import { store } from "../store";
//import

export default {
    data() {
        return {
            //dati
            store,
            inputSearch: '',
            foundSpecs: store.allSpecs,
            showSpecs: false,
        }
    },
    methods: {
        searchSpec() {
            this.foundSpecs = [];
            this.store.allSpecs.forEach((singleSpecs, i) => {
                // confronto il nome di ogni singola spec con l'input che arriva dall'utente
                if (singleSpecs.toLowerCase().includes(this.inputSearch.toLowerCase())) {
                    this.foundSpecs.push(singleSpecs);
                    console.log('trovata la spec');
                }
            });
        },
        showSpecial() {
            this.showSpecs = true
        }

    },
}
</script>

<template>
    <div class="container mx-5">
        <!-- <h1>ciao funziona la home?
            <router-link :to="{ name: 'search' }">link to search</router-link>
        </h1> -->

        <div class="row my-5">
            <div class="col d-flex justify-content-center">
                <div class="bg-white d-flex p-2 w-75  rounded-4" @click="showSpecial()">
                    <input @keyup="searchSpec()" v-model="inputSearch" type="text" class="form-control border-0" placeholder="Type what would you like to train?" aria-label="Username" aria-describedby="addon-wrapping">
                    <!--🔽 Lancia chiamata API 🔽 -->
                    <button class="btn search-button p-2 rounded-3 mx-1">
                        <!-- this fire the search -->
                        <router-link v-if="this.inputSearch" class="text-dark" :to="{ name: 'search', params: { spec: this.inputSearch } }">Search</router-link>
                        <div v-else>Search</div>
                    </button>
                </div>
            </div>
            <!-- {{ foundSpecs }} -->
            <div class="row justify-content-center pt-1">
                <div class=" col-12 w-75 d-flex bg-white rounded    ">
                    <div class="" v-if="this.showSpecs">
                        <div v-for="singleSpecs in foundSpecs">
                            <div @click="this.inputSearch = singleSpecs" class=" p-2">
                                {{ singleSpecs }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Inizio Card -->
            <div class="row py-5">
                <div class="card" style="width: 18rem;" v-for="(singleTrainer, i) in store.allTrainers" :key="i">
                    <img :src="singleTrainer.picture" class="card-img-top" alt="...">
                    <div class="card-body text-center ">
                        <h5 class="card-title ">{{ singleTrainer.user.name }}</h5>
                        <h5 class="card-title">{{ singleTrainer.user.surname }}</h5>
                        <div class="card-title" v-for="(singleSpec, i) in singleTrainer.specializations" :key="i">{{ singleSpec.name }}</div>
                        <div>
                            email : {{ singleTrainer.user.email }}
                        </div>
                        <div>
                            Rating:
                        </div>
                        <!-- rotta vue allo show qui poi -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

.search-button {
    background-color: lightcoral;
}

.thumbnail:hover {
    background-color: lightgray;
}
</style>