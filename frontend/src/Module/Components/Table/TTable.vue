<template>
    <div v-if="paginationOptions">
        <vue-good-table
            mode="remote"
            @on-page-change="onPageChange"
            @on-sort-change="onSortChange"
            @on-column-filter="onColumnFilter"
            @on-per-page-change="onPerPageChange"
            :totalRows="totalRecords"
            :isLoading.sync="isLoading"
            :pagination-options="paginationOptions"
            :columns="aColumn"
            :rows="aRow"
        >
            <template slot="table-row" slot-scope="props">
                <slot :tableData="props"></slot>
            </template>
        </vue-good-table>
    </div>
</template>

<script lang='ts' >
import { Component, Prop, Vue } from "vue-property-decorator";

import { ListLoader } from "../../Sys/ListLoader";
import {
    RowI,
    ColumnI,
    PaginationOptionsI,
} from "../../../../../Entity/Interfaces/ListI";
import { log } from "util";

@Component({
    name: "TTable",
})
export default class TTable extends Vue {
    //data
    private serverParams = {};
    private totalRecords = 10;
    private isLoading = false;

    private aRow: RowI = [];
    private aColumn: ColumnI[] = [];
    private paginationOptions: PaginationOptionsI;

    // props
    @Prop({ required: true }) readonly cListLoader: ListLoader;

    // computed
    get totalRecord(): number {
        return 10;
    }

    get isLoadin2g(): boolean {
        return false;
    }

    // methods

    mounted() {
        console.log("mounted");
        const oInfo = this.cListLoader.faGetInfo().then(data=> {
            console.log(data);
            
        });
        console.log(oInfo);
        
    }

    updateParams(newProps) {
        this.serverParams = Object.assign({}, this.serverParams, newProps);
    }

    onPageChange(params) {
        this.updateParams({ page: params.currentPage });
        this.loadItems();
    }

    onPerPageChange(params) {
        this.updateParams({ perPage: params.currentPerPage });
        this.loadItems();
    }

    onSortChange(params) {
        this.updateParams({
            sort: [
                {
                    type: params.sortType,
                    field: this.aColumn[params.columnIndex].field,
                },
            ],
        });
        this.loadItems();
    }

    onColumnFilter(params) {
        this.updateParams(params);
        this.loadItems();
    }

    // load items is what brings back the rows from server
    loadItems() {
        this.cListLoader.faLoad();
    }

    components: {};
}
</script>