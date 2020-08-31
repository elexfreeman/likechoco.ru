import VueRouter from 'vue-router';
import MainP from './Pages/MainP.vue';
import ProductList from "../Product/ListP.vue";
export const router = new VueRouter({
    mode: 'hash',
    /* mode: 'history', */
    base: __dirname,
    routes: [
        // Главная
        { path: '/', name: 'MainP', component: MainP },
        { path: '/product', name: 'ProductList', component: ProductList },
    ],
});

router.beforeEach((to, from, next) => {
    next();
});