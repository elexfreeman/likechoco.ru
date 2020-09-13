<template>
    <div class="left-menu">
        <div class="menu-group">
            <router-link :to="'/' + sClientR" class="h1-item">Клиенты</router-link>
            <router-link :to="'/' + sClientR" class="h2-item">Физики</router-link>
            <router-link :to="'/' + sClientR" class="h2-item">Юрики</router-link>
        </div>
        <div class="menu-group">
            <router-link :to="'/' + sProductR" class="h1-item">Торговля</router-link>
            <router-link :to="'/' + sProductR + '/add'" class="h2-item">Продажи</router-link>
            <router-link :to="'/'+ sProductCategoryR" class="h2-item">Закупки</router-link>
        </div>
        <div class="menu-group">
            <router-link :to="'/' + sProductR" class="h1-item">Финансы</router-link>
            <router-link :to="'/' + sProductR + '/add'" class="h2-item">Поступления</router-link>
            <router-link :to="'/'+ sProductCategoryR" class="h2-item">Расход</router-link>
        </div>
        <div class="menu-group">
            <router-link :to="'/' + sStorehouseR" class="h1-item">Склады</router-link>
            <router-link :to="'/' + sProductR + '/add'" class="h2-item">Главный склад</router-link>
            <router-link :to="'/'+ sProductCategoryR" class="h2-item">Еще один склад</router-link>
        </div>
        <div class="menu-group">
            <router-link :to="'/' + sProductR" class="h1-item">Товары</router-link>
            <router-link :to="'/' + sProductR + '/add'" class="h2-item">Добавить</router-link>
            <router-link :to="'/'+ sProductCategoryR" class="h2-item">Категории</router-link>
        </div>
    </div>
</template>

<script lang='ts'>
/**
 * Меню слева 
 */

import { sRoute as sProductR  } from "../../../../Entity/Routes/ProductR";
import { sRoute as sProductCategoryR  } from "../../../../Entity/Routes/ProductCategoryR";
import { sRoute as  sClientR } from "../../../../Entity/Routes/ClientR";
import { sRoute as  sStorehouseR } from "../../../../Entity/Routes/StorehouseR";


import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
    name: "LeftMenu",
    components: {},
})
export default class TopBaner extends Vue {
    //data
    private sProductR = sProductR;
    private sProductCategoryR = sProductCategoryR;
    private sClientR = sClientR;
    private sStorehouseR = sStorehouseR;

    // props

    // computed

    // methods
    async mounted() {}
}
</script>

<style lang="scss">
</style>