import VueRouter from 'vue-router';
import MainP from './Pages/MainP.vue';

// модули
import { route as aProductRoute } from "../Product/router";
import { route as aProductCategoryRoute } from "../ProductCategory/router";
import { route as aClientRoute } from "../Client/router";
import { route as aStorehouseRoute } from "../Storehouse/router";

/**
 * Маршруты модулей
 */
const aRoute = [
    // Главная
    { path: '/', name: 'MainP', component: MainP },
    ... aProductRoute,
    ... aProductCategoryRoute,
    ... aClientRoute,
    ... aStorehouseRoute,
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