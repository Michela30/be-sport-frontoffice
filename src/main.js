import { createApp } from 'vue'
import App from './App.vue'
// use router
import router from './routes.js'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App).use(router).mount('#app')

