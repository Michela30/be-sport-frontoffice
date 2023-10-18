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
                <div class="search-bar bg-white d-flex p-2 w-75  rounded-4 mb-5" @click="showSpecial()">
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
            <div class="row gy-2 justify-content-center ">
                <div class="col-4 " style="width: 18rem;" v-for="(singleTrainer, i) in store.allTrainers" :key="i">

                    <div class="card m-2" >
                        <!-- div for img and absolute text -->
                        <div class="card-container ">
                            <img  :src="singleTrainer.picture" class="rounded card-img-top" alt="...">
                            <h5 class="card-title my-name">{{ singleTrainer.user.name }}</h5>
                            <h5 class="card-title  my-surname">{{ singleTrainer.user.surname }}</h5>
                        </div>
                        <!-- start body card -->
                        <div class="card-body m-2 text-center ">
                            <div class="d-flex p-2">
                                <div class="p-1">
                                    Rating:<i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                                    <i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                                </div>
                                <div class="p-1">
                                    Sponsorship: 
                                </div>
                            </div>
                            
                            <div>
                                email : {{ singleTrainer.user.email }}
                            </div>
                            <div>
                                presentazione : Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, officiis.
                            </div>
                            <!-- perchè non funziona il bold? -->
                            <div class="fw-bold 2h">
                                my specializations:
                            </div>
                            <div class="d-flex flex-wrap d-wrap">
                                
                                <div class="single-Spec m-1 p-1"  v-for="(singleSpec, i) in singleTrainer.specializations" :key="i">
                                    {{ singleSpec.name }}
                                </div>
                            </div>
                            
                            <!-- rotta vue allo show qui poi -->
                            <button class="btn search-button p-2 rounded-3 mx-1">
                                <!--💙 this fire the show -->
                                <router-link class="text-dark" :to="{ name: 'show', params: { id: singleTrainer.id } }">Search</router-link>
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

.search-button:hover {
    background-color: lightcoral;
}

.search-button {
    background-color: rgb(253, 215, 215);
}
.search-bar{
    -webkit-box-shadow: 11px 11px 23px -6px $darkColor; 
    box-shadow: 11px 11px 23px -6px $darkColor;
    
}

.thumbnail:hover {
    background-color: lightgray;
}
.card{
    min-height: 95%;
    margin-bottom: 20px;
    .single-Spec{
        background-color: lightcoral;
        padding: 5px;
        margin: 5px;
        border-radius: 15px ;
        
    }
    .card-container{
        position: relative;
        
        
    }
    img{
        max-height: 200px;
        object-fit: cover;
        object-position: top;
    }
    
    .my-name{
        position: absolute;
        bottom: 29px;
        left: 5px;
        font-weight: bold;
        color: $brightText;
        text-shadow: 2px 2px 2px $darkColor;


    }
    .my-surname{
        position: absolute;
        bottom: 10px;
        left: 5px;
        font-weight: bold;
        color: $brightText;
        text-shadow: 2px 2px 2px $darkColor;
    }
}
</style>