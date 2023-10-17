import { reactive } from "vue";
// import braintree from "braintree-web";

const store = reactive({
    api: "http://127.0.0.1:8000/api/restaurants/",
    base_api: "http://127.0.0.1:8000/",
    post_api: "http://127.0.0.1:8000/api/orders",
    mail_api: "http://127.0.0.1:8000/api/leads",

});

export { store };
