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
        <div class="container-fluid  w-100 px-3">
            <div class="row justify-content-between py-3 pt-1">
                <div class="col-4">
                    <div class="d-flex flex-column mb-3">
                        <h5 class="ms-2">About:</h5>
                        <div class="d-flex justify-content-between w-75">
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
                                <li class="p-1">
                                    Privacy Policy
                                </li>
                            </ul>

                            <ul class="ms-1">
                                <li class="p-1">
                                    BeSport Global
                                </li>
                                <li class="p-1">
                                    All Subjects
                                </li>
                                <li class="p-1">
                                    Find the perfect tutor
                                </li>
                                <li class="p-1">
                                    Online Lessons
                                </li>
                                <li class="p-1">
                                    States
                                </li>
                                <li class="p-1">
                                    BeSport Careers
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div class="col-4 d-flex justify-content-center">
                    <div class="d-flex flex-column mb-3">
                        <h5 class="ms-2">Help:</h5>
                        <ul class="ms-1">
                            <li class="p-1">
                                Help Center
                            </li>
                            <li class="p-1">
                                Contact
                            </li>
                            <li class="p-1">
                                Stay in Touch
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-4 d-flex justify-content-end">
                    <div class="d-flex flex-column mb-3">
                        <h5 class="ms-2">Follow Us:</h5>
                        <ul class="ms-1 d-flex fs-5">
                            <li class="p-2">
                                <i class="fa-brands fa-facebook"></i>
                            </li>
                            <li class="p-2">
                                <i class="fa-brands fa-instagram"></i>
                            </li>
                            <li class="p-2">
                                <i class="fa-brands fa-twitter"></i>
                            </li>
                            <li class="p-2">
                                <i class="fa-brands fa-linkedin"></i>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </footer>
</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

footer {
    background-color: $darkColor ;
    color: $brightText;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px
}

h5 {
    font-size: 1rem;
}

.test {
    display: flex !important;
    justify-content: space-between !important;
}
</style>