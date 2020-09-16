<template>
    <TEditPage
        :bIsLoad="bIsLoad"
        :fOk="() => {fOk();}"
        :fCancel="()=>{}"
        :sCaption="sCaption"
        :sRoute="sRoute"
    >
        <template v-slot:content>
            <TEdit
                v-if="row"
                :errorParseS="errorParseS"
                :sRoute="sRoute"
                :cTableInfoLoader="cTableInfoLoader"
                :row="row"
            >
                <template v-slot:content>
                    <div class="form-group">
                        <label>Категория товара</label>
                        <TTableSelector
                            v-model="row.category_id"
                            v-if="tableLoaderProductCategory"
                            :sRoute="sProductCategoryR"
                            :tableLoader="tableLoaderProductCategory"
                            :sField="'caption'"
                            :sModalCaption="'Выбор категории товара'"
                            :fOnSelect="()=>{}"
                        />
                    </div>
                </template>
            </TEdit>
        </template>
    </TEditPage>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import TTable from "../../Components/Table/TTable.vue";

import { RowI, ColumnI } from "../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../Entity/Service/PaginationOptionsS";
import { config } from "../../Config";
import { BaseModel } from "../Sys/BaseModel";

import TEdit from "../Components/Edit/TEdit.vue";
import TTableSelector from "../Components/TTableSelector/TTableSelector.vue";

import { RowInfoLoader } from "../Sys/RowInfoLoader";
import { TableInfoLoader } from "../Sys/TableInfoLoader";
import TEditPage from "../Components/TEditPage.vue";
import { RowSaverS } from "../Sys/RowSaverS";
import { ErrorParseS } from "../Sys/ErrorParseS";

import { sRoute } from "../../../../Entity/Routes/ProductR";
import { sRoute as sProductCategoryR } from "../../../../Entity/Routes/ProductCategoryR";
import { TableLoader } from "../Sys/TableLoader";

@Component({
    components: { TEdit, TEditPage, TTableSelector },
})
export default class AddP extends Vue {
    //data
    private bIsLoad = false;
    private row: any = {};
    private sCaption = "Добавление товара";
    private sRoute = sRoute;
    private sProductCategoryR = sProductCategoryR;

    private errorParseS: ErrorParseS = new ErrorParseS({});

    private tableLoaderProductCategory: TableLoader = null;
    // props

    // computed

    get cTableInfoLoader(): TableInfoLoader {
        return new TableInfoLoader(this.sRoute, new BaseModel(config));
    }

    // methods
    async mounted() {
        const tableLoaderProductCategory = new TableLoader(
            this.sProductCategoryR,
            config
        );
        await tableLoaderProductCategory.listLoader.faInit();
        this.tableLoaderProductCategory = tableLoaderProductCategory;
    }

    async fOk() {
        const rowSaverS = new RowSaverS(this.sRoute, new BaseModel(config));
        this.bIsLoad = true;
        const data = await rowSaverS.faAdd(this.row);
        this.bIsLoad = false;
        if (data.ok) {
            this.$router.push("/" + this.sRoute);
        } else {
            this.errorParseS = new ErrorParseS(data.errors);
            console.log(this.errorParseS);
            
        }
    }
}
</script>

<style lang="scss">
</style>