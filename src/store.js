import { reactive } from "vue";
// import braintree from "braintree-web";

const store = reactive({
    // 💚 axios in app.vue put all trainers here
    apiAllTrainers:  'http://127.0.0.1:8000/api/trainers/',
    apiShowSingleTrainer:'http://127.0.0.1:8000/api/trainer/'+'id',
    apiAllSpecs: 'http://127.0.0.1:8000/api/specializations/',
    apiSpecTrainers: '',

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
        
    

    //  braintree() {
    //     const input = document.querySelector('#dropin-wrapper');
    //     braintree.dropin.create({
    //         // Inserisci la tua chiave di autorizzazione qui
    //         authorization: 'sandbox_s93sbd2q_2jc4smw4xvmkzsp6',
    //         container: '#dropin-container'
    //     }, function (createErr, instance) {
    //         input.addEventListener('mouseleave', function () {
    //             instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
    //                 if (requestPaymentMethodErr) {
    //                     console.error(requestPaymentMethodErr);
    //                 } else {
    //                     // roba loro
    //                     store.paymentValidated = true;
    //                     //console.log(store.paymentValidated);
    //                 }
    //             });
    //         });
    //     });
    // },

});

export { store };
