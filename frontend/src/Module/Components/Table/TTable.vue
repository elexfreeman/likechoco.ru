<template>
    <div>
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

export interface RowI {
    [key: string]: any;
}

export enum SortTypeEnum {
    desc = "desc",
    asc = "asc",
}

export interface ColumnI {
    label: string;
    field: string;
    sortable?: boolean;
    firstSortType?: SortTypeEnum;
    sortFn?: (x, y, col, rowX, rowY) => boolean;
    formatFn?: (val: any) => any;
    html?: boolean;
    width?: number | string;
    hidden?: boolean;
    thClass?: string;
    tdClass?: string | ((row: RowI) => string);
    globalSearchDisabled?: boolean;
}

export class PaginationOptions {
    public enabled: boolean = true;
    public mode: string = "pages";
    public perPage: number = 20;
    public position: string = "top";
    public perPageDropdown: [20, 50, 100];
    public dropdownAllowAll: false;
    public setCurrentPage: number = 0;
    public nextLabel: string = "next";
    public prevLabel: string = "prev";
    public rowsPerPageLabel: string = "Rows per page";
    public ofLabel: string = "of";
    public pageLabel: string = "page"; // for 'pages' mod;
    public allLabel: string = "All";

    static InitRus() {
        const out = new PaginationOptions();
        out.nextLabel = "далее";
        out.prevLabel = "назад";
        out.rowsPerPageLabel = "Строк на странице";

        return out;
    }
}

@Component({
    name: "TTable",
})
export default class TTable extends Vue {

    //data
    private serverParams = {};
    private totalRecords = 10;
    private isLoading = false;

    // props
    @Prop({ required: true }) readonly aRow: RowI[];
    @Prop({ required: true }) readonly aColumn: ColumnI[];
    @Prop({ required: true }) readonly cListLoader: ListLoader;
    @Prop({ required: true }) readonly paginationOptions: PaginationOptions;

    // computed
    get totalRecord(): number {
        return 10;
    }

    get isLoadin2g(): boolean {
        return false;
    }

    // methods

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