<template>
    <div class="t-selector">
        <div v-on:click="fShowModal" class="t-selector-input form-control">
            <span>{{fGetSelectedData}}</span>
            <i class="fas fa-caret-down"></i>
        </div>
        <TModal
            v-if="bShowModal"
            :fOnClose="() => {fHideModal(); }"
            :sTitle="sModalCaption"
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
                            v-on:click="fSelectField(props.tableData.formattedRow)"
                            v-if="props.tableData.column.field == sField"
                            class="t-selected-field text-primary"
                        >{{props.tableData.formattedRow[props.tableData.column.field]}}</div>
                        <div
                            class="d-flex justify-content-end"
                            v-else-if="props.tableData.column.field == 'select_button'"
                        >
                            <button
                                v-on:click="fSelectField(props.tableData.formattedRow)"
                                type="button"
                                class="btn btn-primary"
                            >
                                <i class="fas fa-check"></i>
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
    private selectedData: any = new Object();

    // props

    // событие выбора
    @Prop({ required: true }) readonly fOnSelect: (data: any) => void;
    // маршрут
    @Prop({ required: true }) readonly sRoute: string;
    // загрузчик списка
    @Prop({ required: true }) readonly cListLoader: ListLoader;
    // поле для выбора
    @Prop({ required: true }) readonly sField: string;
    @Prop({ required: true }) readonly sModalCaption: string;

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

    fSelectField(data: any) {
        this.bShowModal = false;
        this.selectedData = data;
        this.fOnSelect(data);
    }

    get fModalSize(): string {
        return ModalSizeEnum.lg;
    }
    get fGetSelectedData(): string {
        if (Object.keys(this.selectedData).length > 0) {
            return `${this.selectedData["id"]}: ${
                this.selectedData[this.sField]
            }`;
        }
        return "";
    }
}
</script>

<style lang="scss">
</style>