<template>
    <TListPage :sCaption="'Товары'" :sRoute="sRoute">
        <template slot="content">
            <TTable
                :cListLoader="cListLoader"
                :sRoute="sRoute"
                :oEditBtn="{sRoute:''}"
                :oDelBtn="{sRoute:''}"
            >
                <template slot="default" slot-scope="props">
                    <span>{{props.tableData.formattedRow[props.tableData.column.field]}}</span>
                </template>
            </TTable>
        </template>
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
    private sRoute = "/product";
    private listLoader: ListLoader;
    // props

    // computed
    get cListLoader(): ListLoader {
        
        return 
    }

    get cTableInfoLoader(): TableInfoLoader {
        return new TableInfoLoader(this.sRoute, new BaseModel(config));
    }

    // methods
    async mounted() {
        console.log("mounted");

        this.listLoader = new ListLoader(this.sRoute, new BaseModel(config));
        await this.listLoader.faInit();
    }
}
</script>

<style lang="scss">
</style>