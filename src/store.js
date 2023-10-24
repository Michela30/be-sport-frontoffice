import { reactive } from "vue";
// import braintree from "braintree-web";

const store = reactive({
    // 💚 axios in app.vue put all trainers here
    apiAllTrainers:  'http://127.0.0.1:8000/api/trainers/',
    apiShowSingleTrainer:'http://127.0.0.1:8000/api/trainer/'+'id',
    apiAllSpecs: 'http://127.0.0.1:8000/api/specializations/',
    apiSpecTrainers: 'http://127.0.0.1:8000/api/trainerfilter/${this.$route.params.spec}',
    apiMessages: 'http://127.0.0.1:8000/api/messages',
    apiReviews: 'http://127.0.0.1:8000/api/reviews',
    apiVotes:  'http://127.0.0.1:8000/api/votes',

    allTrainers: '',

    allSpecs: [],
    // [
    //     // this will fill with api call now is placeholder 📛
    //     // 'Swimming',
    //     // 'Sport Climbing',
    //     // 'Volleyball',
    //     // 'Dance',
    //     // 'Fitness',
    //     // 'Artistic Gymnastic',
    //     // 'Basket',
    //     // 'Martial Arts',
    //     // 'Tennis',
    //     // 'Boxe',
    // ]
        
    

});

export { store };
