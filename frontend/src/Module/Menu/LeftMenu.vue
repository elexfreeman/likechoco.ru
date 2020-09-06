<template>
    <div class="left-menu">
        <div class="menu-group">
            <router-link :to="'/' + sProductR" class="h1-item">
                <i class="fas fa-hands-helping"></i> Торговля
            </router-link>
            <router-link :to="'/' + sProductR + '/add'" class="h2-item">Продажи</router-link>
            <router-link :to="'/'+ sProductCategoryR" class="h2-item">Закупки</router-link>
        </div>
        <div class="menu-group">
            <router-link :to="'/' + sProductR" class="h1-item">
                <i class="fas fa-money-bill-wave"></i> Финансы
            </router-link>
            <router-link :to="'/' + sProductR + '/add'" class="h2-item">Поступления</router-link>
            <router-link :to="'/'+ sProductCategoryR" class="h2-item">Расходы</router-link>
        </div>
        <div class="menu-group">
            <router-link :to="'/' + sProductR" class="h1-item">
                <i class="fas fa-people-carry"></i> Склады
            </router-link>
            <router-link :to="'/' + sProductR + '/add'" class="h2-item">Главный склад</router-link>
            <router-link :to="'/'+ sProductCategoryR" class="h2-item">Еще один склад</router-link>
        </div>
        <div class="menu-group">
            <router-link :to="'/' + sProductR" class="h1-item">
                <i class="fas fa-boxes"></i> Товары
            </router-link>
            <router-link :to="'/' + sProductR + '/add'" class="h2-item">Добавить</router-link>
            <router-link :to="'/'+ sProductCategoryR" class="h2-item">Категории</router-link>
        </div>
    </div>
</template>

<script lang='ts'>
/**
 * Меню слева
 */

import { sRoute as sProductR } from "../../../../Entity/Routes/ProductR";
import { sRoute as sProductCategoryR } from "../../../../Entity/Routes/ProductCategoryR";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
    name: "LeftMenu",
    components: {},
})
export default class TopBaner extends Vue {
    //data
    private sProductR = sProductR;
    private sProductCategoryR = sProductCategoryR;

    // props

    // computed

    // methods
    async mounted() {}
}
</script>

<style lang="scss">
</style>