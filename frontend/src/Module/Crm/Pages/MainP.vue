<template>
    <div class="main-page">
        <div class="main-top">
            <div class="top-title">Добро пожаловать</div>
            <div class="top-description">Тут все и начинается</div>
        </div>
        <div class="container">
            <div class="main-wraper">
                <div class="main-item">
                    <div>{{selectedData}}</div>
                    <TTableSelector
                        v-model="selectedData"
                        v-if="cListLoader"
                        :sRoute="`/product`"
                        :fOnSelect="fOnSelect"
                        :cListLoader="cListLoader"
                        :sField="'caption'"
                        :sModalCaption="'Выбор товара'"
                    />
                </div>
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
import TModal, { ModalSizeEnum } from "../../Components/Modal/TModal.vue";
import TTableSelector from "../../Components/Table/TTableSelector.vue";

@Component({
    components: { TTable, TEdit, TModal, TTableSelector },
})
export default class MainP extends Vue {
    //data
    private serverParams = {};
    private totalRecords = 10;
    private isLoading = false;
    private paginationOptions: PaginationOptionsS = PaginationOptionsS.InitRus();
    private row: any = {};
    private bShowModal = false;
    private cListLoader: ListLoader = null;
    private selectedData:any = {id: 10, 'caption': 'Товар'};
    // props

    // computed

    get cRowInfoLoader(): RowInfoLoader {
        return new RowInfoLoader("/product", new BaseModel(config));
    }

    get cTableInfoLoader(): TableInfoLoader {
        return new TableInfoLoader("/product", new BaseModel(config));
    }

    get fModalSize(): string {
        return ModalSizeEnum.lg;
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
        this.row = await cRowLoader.faLoadInfo(28);
        console.log(this.row);
        const list = new ListLoader("/product", new BaseModel(config));
        await list.faInit();
        this.cListLoader = list;
    }

    fShowModal() {
        this.bShowModal = true;
    }

    fHideModal() {
        this.bShowModal = false;
    }

    updateParams(newProps) {
        this.serverParams = Object.assign({}, this.serverParams, newProps);
    }

    fOnSelect(data: any) {
        console.log(data);
        
    }
}
</script>

<style lang="scss">
</style>