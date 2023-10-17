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
    <h1>Ciao funziona la search!</h1>
   <router-link :to="{ name: 'show' }">link to show</router-link>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
</style>