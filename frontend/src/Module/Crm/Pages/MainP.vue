<template>
    <div>
        <div class="container">
            <h2>Main page</h2>
            <TTable
                :cListLoader="cListLoader"
                :paginationOptions="paginationOptions"
                :aRow="aRow"
                :aColumn="aColumn"
            >
                <template slot="default" slot-scope="props">
                    <span>{{props}}</span>
                </template>
            </TTable>
        </div>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import TTable, {
    PaginationOptions,
    RowI,
    ColumnI,
} from "../../Components/Table/TTable.vue";
import { ListLoader } from "../../Sys/ListLoader";

@Component({
    components: { TTable },
})
export default class MainP extends Vue {

    //data
    private serverParams = {};
    private totalRecords = 10;
    private isLoading = false;
    private paginationOptions: PaginationOptions = PaginationOptions.InitRus();
    private cListLoader = new ListLoader("url");
    // props

    // computed
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

    updateParams(newProps) {
        this.serverParams = Object.assign({}, this.serverParams, newProps);
    }
}
</script>

<style lang="scss">
</style>