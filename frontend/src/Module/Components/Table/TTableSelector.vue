<template>
    <div>
        <TTable :cListLoader="cListLoader" :sRoute="sRoute" :oEditBtn="null" :oDelBtn="null">
            <template slot="default" slot-scope="props">
                <div
                    class="d-flex justify-content-end"
                    v-if="props.column.field == 'select_button'"
                >
                    <button type="button" class="btn btn-primary">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
                <span v-else>{{props.tableData.formattedRow[props.tableData.column.field]}}</span>
            </template>
        </TTable>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import TTable from "../Components/Table/TTable.vue";
import { ListLoader } from "../../Sys/ListLoader";

import { RowI, ColumnI } from "../../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../../Entity/Service/PaginationOptionsS";
import { BaseModel } from "../../Sys/BaseModel";

import { TableInfoLoader } from "../../Sys/TableInfoLoader";
import TListPage from "../Components/TListPage.vue";

@Component({
    name: "TTableSelector",
    components: { TTable, TListPage },
})
export default class TTableSelector extends Vue {
    //data

    // props

    // событие выбора
    @Prop({ required: true }) readonly fOnSelect: (data: any) => void;
    // маршрут
    @Prop({ required: true }) readonly sRoute: string;
    // загрузчик списка
    @Prop({ required: true }) readonly cListLoader: ListLoader;

    // computed

    // methods
    async mounted() {
        console.log("mounted");
        this.cListLoader.fAddColumn({
            label: "",
            field: "select_button",
            sortable: false,
        });
    }
}
</script>

<style lang="scss">
</style>