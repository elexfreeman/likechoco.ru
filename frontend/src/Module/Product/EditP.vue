<template>
    <TEditPage
        :bIsLoad="bIsLoad"
        :fOk="() => {fOk();}"
        :fCancel="() => {fCancel();}"
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
                            v-if="tableLoaderProductCategory"
                            v-model="row.category_id"
                            :bCanEdit="true"
                            :bCanAdd="true"
                            :sRoute="sProductCategoryR"
                            :tableLoader="tableLoaderProductCategory"
                            :sField="'caption'"
                            :sModalCaption="'Выбор категории товара'"
                            :fOnSelect="()=>{}"
                        >
                            <template v-slot:add>
                                <div>ADD category</div>
                            </template>
                        </TTableSelector>
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
export default class EditP extends Vue {
    //data
    private bIsLoad = false;
    private row: any = {};
    private sCaption = "Редактирование товара";
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
        this.errorParseS = new ErrorParseS({});
        const cRowLoader = new RowInfoLoader(
            this.sRoute,
            new BaseModel(config)
        );
        this.row = (
            await cRowLoader.faLoadInfo(Number(this.$route.params["id"]))
        ).data.row;

        const tableLoaderProductCategory = new TableLoader(
            this.sProductCategoryR,
            config
        );
        await tableLoaderProductCategory.listLoader.faInit();
        this.tableLoaderProductCategory = tableLoaderProductCategory;
    }

    /**
     * событие сохранения
     */
    async fOk() {
        const rowSaverS = new RowSaverS(this.sRoute, new BaseModel(config));
        this.bIsLoad = true;
        const data = await rowSaverS.faUpdate(this.row);
        this.bIsLoad = false;
        if (data.ok) {
            this.$router.push("/" + this.sRoute);
        } else {
            this.errorParseS = new ErrorParseS(data.errors);
        }
    }

    async fCancel() {
        this.$router.push({ path: "/" + this.sRoute });
    }
}
</script>

<style lang="scss">
</style>