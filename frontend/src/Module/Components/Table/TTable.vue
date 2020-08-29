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
import { SearchS, SearchParamI } from "../../../../../Entity/Service/SearchS";
import { ListLoader } from "../../Sys/ListLoader";
import {
    RowI,
    ColumnI,
    PaginationOptionsI,
} from "../../../../../Entity/Interfaces/ListI";
import { log } from "util";

export interface ServerParamsI {
    columnFilters: {};
    sort: {
        field: string;
        type: string;
    };
    page: 1;
    perPage: 20;
}

@Component({
    name: "TTable",
})
export default class TTable extends Vue {
    //data
    private serverParams: ServerParamsI = {
        columnFilters: {},
        sort: {
            field: "",
            type: "",
        },
        page: 1,
        perPage: 20,
    };
    private totalRecords = 10;
    private isLoading = false;

    private aRow: RowI = [];
    private aColumn: ColumnI[] = [];
    private paginationOptions: PaginationOptionsI = null;

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

    async mounted() {
        console.log("mounted");
        const oInfo = await this.cListLoader.faGetInfo();
        console.log(oInfo);

        this.paginationOptions = oInfo.paginationOptions;
        this.aColumn = oInfo.aColumn;

        this.faLoadItems();
    }

    updateParams(newProps) {
        this.serverParams = Object.assign({}, this.serverParams, newProps);
        console.log(this.serverParams);
    }

    onPageChange(params) {
        this.updateParams({ page: params.currentPage });
        this.faLoadItems();
    }

    onPerPageChange(params) {
        this.updateParams({ perPage: params.currentPerPage });
        this.faLoadItems();
    }

    onSortChange(params) {
        this.updateParams({
            sort: params[0],
        });
        this.faLoadItems();
    }

    onColumnFilter(params) {
        this.updateParams(params);
        this.faLoadItems();
    }

    // load items is what brings back the rows from server
    async faLoadItems() {
        const searchS = new SearchS();
        searchS.fSetOffest(this.serverParams.page * this.serverParams.perPage);
        searchS.fSetLimit(this.serverParams.perPage);
        
        const resp = await this.cListLoader.faLoad(searchS);
        this.aRow = resp.list;
        this.totalRecords = resp.total;
    }

    components: {};
}
</script>