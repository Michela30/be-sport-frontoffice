import { reactive } from "vue";
// import braintree from "braintree-web";

const store = reactive({
    api: "http://127.0.0.1:8000/api/restaurants/",
    base_api: "http://127.0.0.1:8000/",
    post_api: "http://127.0.0.1:8000/api/orders",
    mail_api: "http://127.0.0.1:8000/api/leads",
    restaurant: null,
    plates: [],
    cart: [],
    cartItemCount: 0,
    plateIds: [],
    prices: [],
    totalPrice: 0,
    fullname: "",
    address: "",
    phone: null,
    email: "",
    status: "Ordine inviato",
    paymentValidated: false,

    // se store validated tru attiva il bottone hai pagato yeah

    // Metodo per inizializzare Braintree
    braintree() {
        const input = document.querySelector('#dropin-wrapper');
        braintree.dropin.create({
            // Inserisci la tua chiave di autorizzazione qui
            authorization: 'sandbox_s93sbd2q_2jc4smw4xvmkzsp6',
            container: '#dropin-container'
        }, function (createErr, instance) {
            input.addEventListener('mouseleave', function () {
                instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
                    if (requestPaymentMethodErr) {
                        console.error(requestPaymentMethodErr);
                    } else {
                        // roba loro
                        store.paymentValidated = true;
                        //console.log(store.paymentValidated);
                    }
                });
            });
        });
    },
});

// Esporta l'oggetto store
export { store };
