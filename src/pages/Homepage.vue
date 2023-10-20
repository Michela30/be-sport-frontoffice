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
    <div class="container-fluid  wrapper-container">
        <div class=" my-container container w-100 m-auto ">
            <!-- <h1>ciao funziona la home?
                <router-link :to="{ name: 'search' }">link to search</router-link>
            </h1> -->


            <div class="col d-flex justify-content-center ">
                <div class="search-bar bg-white d-flex p-2 w-75  rounded-4" @click="showSpecial()">
                    <input @keyup="searchSpec()" v-model="inputSearch" type="text" class="form-control border-0"
                        placeholder="Type what would you like to train?" aria-label="Username"
                        aria-describedby="addon-wrapping">
                    <!--🔽 Lancia chiamata API 🔽 -->
                    <button class="btn search-button p-2 rounded-3 mx-1">
                        <!--💚 this fire the search -->
                        <router-link v-if="this.inputSearch" class="text-dark"
                            :to="{ name: 'search', params: { spec: this.inputSearch } }">Search</router-link>
                        <div v-else>Search</div>
                    </button>
                </div>
            </div>
            <!-- {{ foundSpecs }} -->
            <div class="row justify-content-center pt-1 mb-5">
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
            <div class="row justify-content-center ">
                <div class="col-4 py-2" style="width: 18rem;" v-for="(singleTrainer, i) in store.allTrainers" :key="i">
                    <!--💙 this fire the show -->
                    <router-link class="text-dark" :to="{ name: 'show', params: { id: singleTrainer.id } }">

                        <div class="card m-2">
                            <!-- div for img and absolute text -->
                            <div class="card-container ">
                                <!-- v-if per aggiornare img da API -->
                                <div v-if="singleTrainer.full_thumb_path">
                                    <img :src="singleTrainer.full_thumb_path" class="card-img-top">
                                </div>
                                <div v-else>
                                    <img :src="singleTrainer.picture" class="rounded card-img-top" alt="...">
                                </div>

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
                                    presentazione : Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
                                    officiis.
                                </div>
                                <!-- perchè non funziona il bold? -->
                                <div class="fw-bold 2h">
                                    my specializations:
                                </div>
                                <div class="d-flex flex-wrap d-wrap">

                                    <div class="single-Spec m-1 p-1"
                                        v-for="(singleSpec, i) in singleTrainer.specializations " :key="i">
                                        {{ singleSpec.name }}
                                    </div>
                                </div>

                                <!-- rotta vue allo show qui poi -->
                                <!-- <button class="btn search-button p-2 rounded-3 mx-1"> -->
                                <!-- My Details -->

                                <!-- </button> -->
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

        </div>
    </div>
    <!-- Inizio Review -->
    <div class="container-fluid my-container-bottom">
        <!-- non mi prende il bg ??? why -->
        <div class="h-100 container my-container-bottom w-100 m-auto py-5 ">
            <div class="row review-row p-2  ">
                <div class="col-md-6 col-sm-12 p-2 left-container pe-5 d-flex flex-column  justify-content-center">

                    <h2 class="title py-4 ">
                        Skilled and top-rated tutors
                    </h2>
                    <div class="text">
                        <span>More than thousents of students</span> gave a <span>5 star </span> review to their
                        tutor
                    </div>
                </div>
                <!-- inizio card -->

                <div class="col-md-6 my-row-2 col-sm-12 ">
                    <div class="my-col m-2 p-3" v-for="(singleTrainer, i) in store.allTrainers.slice(0, 6)" :key="i">
                        <div class="col-12 d-flex">
                            <div class="col-auto ">
                                <div class="img-box ">
                                    <!-- 🔽 Metto una img di placeholder 🔽 -->
                                    <!-- <img src="../../public/img-trainers/2.jpg" alt="img da placeholder"> -->
                                    <div class="my-img" v-if="singleTrainer.full_thumb_path">
                                        <img :src="singleTrainer.full_thumb_path" class="my-img">
                                    </div>
                                    <div v-else class="my-img">
                                        <img :src="singleTrainer.picture" class="rounded my-img" alt="...">
                                    </div>
                                </div>

                            </div>
                            <div class="col-auto ps-2 d-flex flex-column justify-content-center">
                                <div>
                                    <div class="fs-5">
                                        {{ singleTrainer.user.name }}


                                    </div>
                                </div>


                                <div class="fs-6">
                                    <div class="my-text">
                                        <!--🔽 specializzazione di placeholder🔽 -->
                                        <i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                                        <i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                                        <i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                                        <i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                                        <i class="fa-solid fa-star" style="color: #ffdd00;"></i>
                                        <!-- <div class="single-Spec m-1 p-1" v-for="(singleSpec, i) in singleTrainer.specializations"
                                                :key="i">
                                                {{ singleSpec.name }} 
                                            </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Inizio contenuto della singola card -->
                        <div class="col-12 py-2">
                            <div class="fs-5">
                                <!-- review da palceholder -->
                                <div class="fs-5">
                                    <!-- {{ singleTrainer.review[0].comment }} -->
                                    <template v-if="singleTrainer.review && singleTrainer.review[i]">
                                        {{ singleTrainer.review[i].comment }}
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="fs-5">
                                <!-- review da palceholder -->
                                <template v-if="singleTrainer.review && singleTrainer.review[i]">
                                    {{ singleTrainer.review[i].name }} {{ singleTrainer.review[i].date }}
                                </template>


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

.my-container {
    background-color: $mainColor;
}

.wrapper-container {
    background-color: $mainColor !important;
}

.my-container-bottom {
    background-color: whitesmoke;


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
    min-height: 100%;
    margin-bottom: 20px;

    .search-button:hover {
        background-color: lightcoral;
    }

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

// Inizio CSS rewiev

.review-row {
    * {
        background-color: whitesmoke;
    }

    padding-top: 100px !important;

    .title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 50px;
    }

    .text {
        font-size: 1.5rem;

        span {
            color: rgb(165, 29, 29);
        }
    }

    .my-col {
        background-color: whitesmoke;
        border-radius: 30px;
        -webkit-box-shadow: 11px 11px 23px -6px $darkColor;
        box-shadow: 11px 11px 23px -6px $darkColor;
        width: calc((100% / 2) - 20px) ;
        margin: 10px 20px;
    }

    .img-box {
        width: 80px;
        height: 80px;

        .my-img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            object-position: top;
        }
    }

    .my-text {
        text-shadow: 2px 2px 2px $darkColor;
    }

    .my-row-2 {
        display: flex;
        flex-wrap: wrap;
        margin: 10px;
        transform: rotate(-7deg);
    }
}

// MEDIA QUERY

@media screen and (max-width: 760px) {
    .my-row-2 {
        transform: rotate(-0deg) !important;
    }
    .my-col{
        width:calc((100% / 1) - 20px) !important;
        
    }
   
}
</style>