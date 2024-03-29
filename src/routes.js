import { createRouter, createWebHistory } from 'vue-router';
import Homepage from "./pages/Homepage.vue";
import Searchpage from "./pages/Searchpage.vue";
import Showpage from "./pages/Showpage.vue";

const routes = [
    // homepage
    {
        path: '/be-sport-frontoffice/',
        name: 'home',
        component: Homepage,
    },
    // searchPage
    {
        path: '/be-sport-frontoffice/search/:spec',
        name: 'search',
        component: Searchpage,
    },
    //showPage
    {
        path: '/show/:slug',
        name: 'show',
        component: Showpage,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;