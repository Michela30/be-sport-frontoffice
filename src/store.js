import { reactive } from "vue";
// import braintree from "braintree-web";

const store = reactive({
    // 💚 axios in app.vue put all trainers here
    allTrainers: '',

    allSpecs: []
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
