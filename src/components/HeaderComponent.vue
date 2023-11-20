<script>
import { store } from "../store";


export default {
    data() {
        return {
            store,
            //dati
        }
    },
    methods: {
        //function
    },
}
</script>

<template>
    <header>
        <div class="container-fluid d-felx justify-content-center d-inline  px-2 ">
            <div class="row px-2 ">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <router-link :to="{ name: 'home' }">
                            <h6 class=" logoTypo">Be<span>Sport</span></h6>
                        </router-link>
                        <button class="navbar-toggler bg-white p-1 me-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">

                            </ul>
                            <span class="navbar-text">
                                <ul class="d-flex justify-content-end ">
                                    <!-- <li>
                                        <button class="btn btn-light mx-2 px-3 py-1 rounded-4">
                                            <router-link class="text-dark" :to="{ name: 'search', params: { spec: ' ' } }">Search</router-link>
                                        </button>
                                    </li> -->
                                    <li>
                                        <button class="btn btn-light mx-2 px-3 py-1 rounded-4">
                                            <a class="text-dark px-2" href="#faq">Faq</a>
                                        </button>
                                    </li>

                                    <li>
                                        <button class="btn btn-light mx-2 px-2 py-1 rounded-4 ">
                                            <a class="text-dark px-2" href="https://besports.netsons.org/login">Login</a>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="btn btn-light mx-2 px-2 py-1 rounded-4 ">
                                            <a class="text-dark px-2" href="https://besports.netsons.org/register">Register</a>
                                        </button>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

* {
    color: $brightText;
}

h6:hover {
    cursor: pointer;
    text-shadow: 2px 2px 2px $darkColor;
}

button {
    font-size: 0.8rem;
    -webkit-box-shadow: 11px 11px 23px -6px rgba(0, 0, 0, 0.43);
    box-shadow: 0px 9px 20px -6px $shadowColor;
}

header {
    background: $mainColor;
    background: rgba(232, 124, 93, 1);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0px 9px 20px -6px $shadowColor;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

}

.logoTypo {
    font-size: 1.5rem;
    font-weight: 600;
    color: $brightText;

    span {
        color: $compColor;
    }
}

</style>