<template>
    <div class="left-menu">
        <div class="menu-group">
            <router-link :to="'/' + sClientR" class="h1-item">Клиенты</router-link>
            <router-link :to="'/' + sClientR" class="h2-item">Физ. лица</router-link>
            <router-link :to="'/' + sClientR" class="h2-item">Юр. лица</router-link>
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
            <router-link  v-for="item in aStorehouse" :key="item.id" :to="'/' + sProductR + '/add'" class="h2-item">
                {{item.caption}}
            </router-link>
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

import { sRoute as sProductR } from "../../../../Entity/Routes/ProductR";
import { sRoute as sProductCategoryR } from "../../../../Entity/Routes/ProductCategoryR";
import { sRoute as sClientR } from "../../../../Entity/Routes/ClientR";
import { sRoute as sStorehouseR } from "../../../../Entity/Routes/StorehouseR";

import { Component, Prop, Vue } from "vue-property-decorator";

import { ListLoader } from "../Sys/ListLoader";
import { BaseModel } from "../Sys/BaseModel";
import { config } from "../../Config";
import { SearchS } from "../../../../Entity/Service/SearchS";

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

    private cListLoader: ListLoader = null;
    private sRouteStorehouse = "storehouse";

    // props

    // computed
    get aStorehouse(): any[] {
        return this.$store.state.MenuStore.aStorehouse;
    }


    // methods
    async mounted() {
        const list = new ListLoader(
            this.sRouteStorehouse,
            new BaseModel(config)
        );

        await list.faInit();
        this.cListLoader = list;
        const searchS = new SearchS();
        searchS.fSetOffest(0);
        searchS.fSetLimit(1000);

        const resp = await this.cListLoader.faLoad(searchS);
        this.$store.commit('setMenuStoreAStorehouse', resp.list);
    }
}
</script>

<style lang="scss">
</style>