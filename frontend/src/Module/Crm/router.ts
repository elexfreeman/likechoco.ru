import VueRouter from 'vue-router';
import MainP from './Pages/MainP.vue';

// модули
import { route as aProductRoute } from "../Product/router";
import { route as aProductCategoryRoute } from "../ProductCategory/router";

/**
 * Маршруты модулей
 */
const aRoute = [
    // Главная
    { path: '/', name: 'MainP', component: MainP },
    ... aProductRoute,
    ... aProductCategoryRoute,
];


export const router = new VueRouter({
    mode: 'hash',
    /* mode: 'history', */
    base: __dirname,
    routes: aRoute,
});

router.beforeEach((to, from, next) => {
    next();
});