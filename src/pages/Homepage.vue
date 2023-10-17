<script>
import { store } from "../store";
//import

export default {
    data() {
        return {
            //dati
            store,
            inputSearch:'',
            foundSpecs:  [],
        }
    },
    methods: {
        searchSpec() {
            this.foundSpecs = [];
            this.store.allSpecs.forEach((singleSpecs,i) => {
                // confronto il nome di ogni singola spec con l'input che arriva dall'utente
                if (singleSpecs.toLowerCase().includes(this.inputSearch.toLowerCase()) ) {
                    this.foundSpecs.push(singleSpecs);
                    console.log('trovata la spec');
                }
            });
        },
    },
}
</script>

<template>
    <h1>ciao funziona la home?
        <router-link :to="{ name: 'search' }">link to search</router-link>
    </h1>

    <div class="container">
        <div class="row">
            <div class="col">
                <input @keyup="searchSpec()" v-model="inputSearch" type="text" class="form-control" placeholder="Type what would you like to train?" aria-label="Username" aria-describedby="addon-wrapping">
                <!-- {{ this.store.allSpecs }} -->
                {{ inputSearch }}
                <h1>
                    queste sono le tue spec trovcate: <br> {{ foundSpecs }}
                </h1>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
</style>