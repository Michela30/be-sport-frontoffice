<script>
import axios from 'axios';
import { store } from "../store";

export default {
    data() {
        return {
            //dati
            singleTrainer: ''
        }
    },
    methods: {
    },
    created() {
        axios
            .get(`http://127.0.0.1:8000/api/trainers/${this.$route.params.id}`)
            .then(response => {
                console.log(this.$route.params.id);
                console.log(response.data);
                // questo riempie il singolo trainer con i dati filtrati dalla api
                this.singleTrainer = response.data;
            })
    }

}
</script>


<template>
    <h1>Ciao funziona lo show!</h1>
    <div class="container">
        <div class="row">
            <!-- picture preview -->
            <div class="col-12">
                <div class="imgWrapper w-50">
                    <img src="../assets/imgs/superlogo.png" alt="a">
                </div>
            </div>
            <!-- data -->
            <div class="col-12">
                <h3 class="text-center">Nome del tizio</h3>
            </div>
            <!-- rating -->
            <div class="p-1">
                Rating:<i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                <i class="fa-solid fa-star" style="color: #ffdd00;"></i>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
</style>