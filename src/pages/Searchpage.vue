<script>
//import
import { store } from "../store";

export default {
    data() {
        return {
            // need to clean this up
            store,
            inputSearch: '',
            foundSpecs: store.allSpecs,
            showSpecs: false,
        }
    },
    methods: {
        searchBySpecs() {
            axios
                .get(`http://127.0.0.1:8000/api/trainers/${this.$route.params.spec}`)
                .then(response => {
                    this.singleProject = response.data.results;
                })
        }
    },
    created() {
        console.log('questo è il paramentro che arriva dalla vue rotta ->', this.$route.params.spec)
    }
}
</script>


<template>
    <div class="container mx-5">
        <div class="row my-5">
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