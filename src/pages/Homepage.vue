<script>
//import

export default {
    data() {
        return {
            //dati
        }
    },
    methods: {
        //function
        getImagePath: function (image) {
            return new URL(image, import.meta.url).href;
        }
    },


}
</script>


<template>
    <h1>ciao funziona la home?
        <router-link :to="{name: 'search'}">link to search</router-link>
    </h1>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
</style>