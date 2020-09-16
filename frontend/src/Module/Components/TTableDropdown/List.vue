<template>
    <div>
        <div class="pb-2 text-right btn-plus" v-if="bCanAdd">
            <button v-on:click="() => fSetModalRoute(1)" class="btn btn-primary">
                <i class="fa fa-plus"></i>
            </button>
        </div>
        <TTable
            :cListLoader="tableLoader.listLoader"
            :oEditBtn="null"
            :oDelBtn="null"
        >
            <template slot="default" slot-scope="props">
                <div
                    v-on:click="fSelectField(props.tableData.formattedRow)"
                    v-if="props.tableData.column.field == sField"
                    class="t-selected-field text-primary"
                >{{props.tableData.formattedRow[props.tableData.column.field]}}</div>
                <span v-else>{{props.tableData.formattedRow[props.tableData.column.field]}}</span>
            </template>
        </TTable>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

import { RowI, ColumnI } from "../../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../../Entity/Service/PaginationOptionsS";

import { TableLoader } from "../../Sys/TableLoader";
import TModal, { ModalSizeEnum } from "../Modal/TModal.vue";
import TTable from "../Table/TTable.vue";

@Component({
    name: "TTableSelector",
    components: { TTable, TModal },
})
export default class List extends Vue {
    //data

    // props

    // загрузчик списка
    @Prop({ required: true }) readonly tableLoader: TableLoader;

    // поле для выбора
    @Prop({ required: true }) readonly sField: string;


    // можно добавлять записи
    @Prop({ required: false, default: false }) readonly bCanAdd: boolean;

    @Prop({ required: true }) readonly fSelectField: (data: any) => void;

    @Prop({ required: true }) readonly fSetModalRoute: (data: number) => void;


    // computed

    // methods
    async mounted() {
    }
}
</script>

<style lang="scss">
</style>