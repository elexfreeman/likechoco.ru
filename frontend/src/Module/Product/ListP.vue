<template>
    <TListPage :sCaption="'Товары'">
        <TTable
            :cListLoader="cListLoader"
            :paginationOptions="paginationOptions"
            :oEditBtn="{sUrl:''}"
            :oDelBtn="{sUrl:''}"
        >
            <template slot="default" slot-scope="props">
                <span>{{props.tableData.formattedRow[props.tableData.column.field]}}</span>
            </template>
        </TTable>
    </TListPage>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import TTable from "../Components/Table/TTable.vue";
import { ListLoader } from "../Sys/ListLoader";

import { RowI, ColumnI } from "../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../Entity/Service/PaginationOptionsS";
import { config } from "../../Config";
import { BaseModel } from "../Sys/BaseModel";

import { TableInfoLoader } from "../Sys/TableInfoLoader";
import TListPage from "../Components/TListPage.vue";
@Component({
    name: "ListP",
    components: { TTable, TListPage },
})
export default class MainP extends Vue {
    //data
    private serverParams = {};
    private totalRecords = 10;
    private isLoading = false;
    private paginationOptions: PaginationOptionsS = PaginationOptionsS.InitRus();
    private row: any = {};
    private sUrl = "/product";
    // props

    // computed
    get cListLoader(): ListLoader {
        return new ListLoader(this.sUrl, new BaseModel(config));
    }

    get cTableInfoLoader(): TableInfoLoader {
        return new TableInfoLoader(this.sUrl, new BaseModel(config));
    }

    // methods
    async mounted() {
        console.log("mounted");
    }
}
</script>

<style lang="scss">
</style>