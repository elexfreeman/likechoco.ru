import VueRouter from 'vue-router';
import MainP from './Pages/MainP.vue';
import ProductList from "../Product/ListP.vue";
import ProductEdit from "../Product/EditP.vue";



export const router = new VueRouter({
    mode: 'hash',
    /* mode: 'history', */
    base: __dirname,
    routes: [
        // Главная
        { path: '/', name: 'MainP', component: MainP },
        { path: '/product', name: 'ProductList', component: ProductList },
        { path: '/product/edit/:id', name: 'ProductEdit', component: ProductEdit},
    ],
});

router.beforeEach((to, from, next) => {
    next();
});