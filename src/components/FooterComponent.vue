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
    <footer>
        <div class="container-fluid w-100 p-3">
            <div class="row justify-content-between">

                <div class="col-4 pt-2 text-center">
                        
                        <h5 class="ms-2">About:</h5>
                        <ul class="ms-1">
                            <li class="p-1">
                                Who are we
                            </li>
                            <li class="p-1">
                                Our Value
                            </li>
                            <li class="p-1">
                                Terms & Condition
                            </li>
                            <li class="p-1" href="#search">
                                Trainers
                            </li>
                            <li class="p-1">
                                <a href="http://127.0.0.1:8000/login">
                                    Admin
                                </a>
                            </li>
                        </ul>
                    </div>        
                    
                    <div class="col-4 pt-2 text-center">
                        <h5 class="ms-2">&copy; Team-Four</h5>
                        <ul class="ms-1">
                            <li class="pt-2">
                                <a href="https://www.linkedin.com/in/francesco-boco-82950a295/">
                                    Francesco Boco
                                </a>
                            </li>
                            <li class="pt-1">
                               <a href="https://www.linkedin.com/in/michela-de-stefano/">
                                Michela De Stefano
                               </a>
                            </li>
                            <li class="pt-1">
                                <a href="https://www.linkedin.com/in/pietromarilei/">
                                    Pietro Marilei
                                </a>
                            </li>
                            <li class="pt-1">
                                <a href="https://www.linkedin.com/in/christian-mazzaro-1522b0295/">
                                    Christian Mazzaro
                                </a>
                            </li>
                            <li class="pt-1">
                                <a href="https://www.linkedin.com/in/pasquale-rizzo-6a8b42216/">
                                    Pasquale Rizzo
                                </a>
                            </li>
                        </ul>
                    </div>

                
                    <div class="col-4 pt-2 text-center">
                        <h5 class="ms-2">Follow Us:</h5>

                        <div class="text-center ms-1 fs-5 mt-3">
                            <span class="p-2">
                                <a href="https://www.facebook.com/">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                                
                            </span>
                            <span class="p-2">
                                <a href="https://www.instagram.com/">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                                
                            </span>
                            <span class="p-2">
                                <a href="https://twitter.com/">
                                    <i class="fa-brands fa-twitter"></i>
                                </a>
                                
                            </span>
                            <span class="p-2">
                                <a href="https://www.linkedin.com/">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                                
                            </span>
                        </div>
                    </div>   

            </div>
        </div>
    </footer>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

footer {
    overflow-y: hidden;
    background-color: $darkColor;
    color: $brightText;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    padding: 50px;

}

h5 {
    font-size: 1rem;
}

ul{
    li:hover{
        color: $secColor;
    }
}
</style>