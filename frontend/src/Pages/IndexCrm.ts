import Vue from 'vue';
import VueRouter from 'vue-router';
import Crm from '../Module/Crm/Crm.vue';
import { store } from '../store';
import { router } from "../Module/Crm/router";

async function faMain() {
    console.log('Start crm');

    let app = document.getElementById('app');
    if (app) {
        console.log('finde');
        Vue.use(VueRouter);

        /* верхний компонент */
        new Vue({
            router,
            store,
            /*  mode: 'history', */
            components: {},
            beforeCreate() { },
            mounted() { },
            computed: {},
            render: (h) => h(Crm),
        }).$mount('#app');
    }
}

document.addEventListener("DOMContentLoaded", faMain);