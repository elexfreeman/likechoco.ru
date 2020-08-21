import VueRouter from 'vue-router';
import MainP from './Pages/MainP.vue';
export const router = new VueRouter({
    mode: 'hash',
    /* mode: 'history', */
    base: __dirname,
    routes: [
        // Главная
        { path: '/', name: 'MainP', component: MainP },
    ],
});

router.beforeEach((to, from, next) => {
    next();
});