<template>
    <div class="form-inline my-2 my-lg-0">
        <div  v-on:click="fShowModal" class="t-selector-input form-control mr-sm-2" />
        <button v-on:click="fShowModal" class="t-btn-input btn btn-outline-success my-2 my-sm-0">
            <i class="fas fa-table"></i>
        </button>
        <TModal
            v-if="bShowModal"
            :fOnClose="() => {fHideModal(); }"
            :sTitle="`Заголовок модалки`"
            :sSizeClass="fModalSize"
            :bIsOpen="true"
        >
            <template v-if="cListLoader" v-slot:content>
                <TTable
                    :cListLoader="cListLoader"
                    :sRoute="sRoute"
                    :oEditBtn="null"
                    :oDelBtn="null"
                >
                    <template slot="default" slot-scope="props">
                        <div
                            class="d-flex justify-content-end"
                            v-if="props.tableData.column.field == 'select_button'"
                        >
                            <button type="button" class="btn btn-primary">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                        <span v-else>{{props.tableData.formattedRow[props.tableData.column.field]}}</span>
                    </template>
                </TTable>
            </template>
        </TModal>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { ListLoader } from "../../Sys/ListLoader";

import { RowI, ColumnI } from "../../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../../Entity/Service/PaginationOptionsS";
import { BaseModel } from "../../Sys/BaseModel";

import { TableInfoLoader } from "../../Sys/TableInfoLoader";
import TModal, { ModalSizeEnum } from "../Modal/TModal.vue";
import TTable from "../Table/TTable.vue";

@Component({
    name: "TTableSelector",
    components: { TTable, TModal },
})
export default class TTableSelector extends Vue {
    //data
    private bShowModal = false;

    // props

    // событие выбора
    @Prop({ required: true }) readonly fOnSelect: (data: any) => void;
    // маршрут
    @Prop({ required: true }) readonly sRoute: string;
    // загрузчик списка
    @Prop({ required: true }) readonly cListLoader: ListLoader;
    // поле для выбора
    @Prop({ required: true }) readonly sField: string;

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

    fShowModal() {
        this.bShowModal = true;
    }

    fHideModal() {
        this.bShowModal = false;
    }

    get fModalSize(): string {
        return ModalSizeEnum.lg;
    }
}
</script>

<style lang="scss">
</style>