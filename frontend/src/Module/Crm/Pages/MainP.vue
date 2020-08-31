<template>
    <div class="main-page">
        <div class="main-top">
            <div class="top-title">Добро пожаловать</div>
            <div class="top-description">Тут все и начинается</div>
        </div>
        <div class="container">
            <div class="main-wraper">
                <router-link to="/product" class="main-item">
                    <div class="item-title">Товары на складе</div>
                </router-link>
                <router-link to="/product" class="main-item">
                    <div class="item-title">Товары на складе</div>
                </router-link>
                <router-link to="/product" class="main-item">
                    <div class="item-title">Товары на складе</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import TTable from "../../Components/Table/TTable.vue";
import { ListLoader } from "../../Sys/ListLoader";

import { RowI, ColumnI } from "../../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../../Entity/Service/PaginationOptionsS";
import { config } from "../../../Config";
import { BaseModel } from "../../Sys/BaseModel";

import TEdit from "../../Components/Edit/TEdit.vue";
import { RowInfoLoader } from "../../Sys/RowInfoLoader";
import { TableInfoLoader } from "../../Sys/TableInfoLoader";

@Component({
    components: { TTable, TEdit },
})
export default class MainP extends Vue {
    //data
    private serverParams = {};
    private totalRecords = 10;
    private isLoading = false;
    private paginationOptions: PaginationOptionsS = PaginationOptionsS.InitRus();
    private row: any = {};
    // props

    // computed
    get cListLoader(): ListLoader {
        return new ListLoader("/product", new BaseModel(config));
    }

    get cRowInfoLoader(): RowInfoLoader {
        return new RowInfoLoader("/product", new BaseModel(config));
    }

    get cTableInfoLoader(): TableInfoLoader {
        return new TableInfoLoader("/product", new BaseModel(config));
    }

    get totalRecord(): number {
        return 10;
    }

    get isLoadin2g(): boolean {
        return false;
    }

    get aRow(): RowI[] {
        return [];
    }

    get aColumn(): ColumnI[] {
        return [];
    }

    // methods
    async mounted() {
        console.log("mounted");
        const cRowLoader = new RowInfoLoader("/product", new BaseModel(config));
        this.row = (await cRowLoader.faLoadInfo(28));
        console.log(this.row);
        
    }

    updateParams(newProps) {
        this.serverParams = Object.assign({}, this.serverParams, newProps);
    }
}
</script>

<style lang="scss">
</style>