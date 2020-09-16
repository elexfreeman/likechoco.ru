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
                        v-if="tableLoader"
                        :sRoute="`/product`"
                        :fOnSelect="fOnSelect"
                        :tableLoader="tableLoader"
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

import { RowI, ColumnI } from "../../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../../Entity/Service/PaginationOptionsS";
import { config } from "../../../Config";

import TEdit from "../../Components/Edit/TEdit.vue";
import TModal, { ModalSizeEnum } from "../../Components/Modal/TModal.vue";
import TTableSelector from "../../Components/TTableSelector/TTableSelector.vue";
import { TableLoader } from "../../Sys/TableLoader";

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
    private selectedData: any = 23;
    private tableLoader: TableLoader = null;
    // props

    // computed

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
        const tableLoader = new TableLoader("product", config);
        await tableLoader.listLoader.faInit();
        this.tableLoader = tableLoader;
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