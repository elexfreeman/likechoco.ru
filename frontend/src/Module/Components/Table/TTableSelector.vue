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
            <template v-slot:content>

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
                        <div
                            class="d-flex justify-content-end"
                            v-else-if="props.tableData.column.field == 'select_button'"
                        >
                            <button
                                v-on:click="fSelectField(props.tableData.formattedRow)"
                                type="button"
                                class="btn btn btn-light"
                            >
                                <i class="far fa-check-circle"></i>
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

import { RowI, ColumnI } from "../../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../../Entity/Service/PaginationOptionsS";

import { TableLoader } from "../../Sys/TableLoader";
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
    // загрузчик списка
    @Prop({ required: true }) readonly tableLoader: TableLoader;
    // поле для выбора
    @Prop({ required: true }) readonly sField: string;
    @Prop({ required: true }) readonly sModalCaption: string;
    @Prop({ required: false }) readonly value: number;

    // computed

    // methods
    async mounted() {
        console.log("mounted");
        this.tableLoader.listLoader.fAddColumn({
            label: "",
            field: "select_button",
            sortable: false,
        });

        if(this.value) {
            const respData = await this.tableLoader.rowInfoLoader.faLoadInfo(this.value);
            if(respData.ok) {
                this.selectedData = respData.data.row;
            }
        }
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
        this.$emit("input", data["id"]);
    }

    get fModalSize(): string {
        return ModalSizeEnum.lg;
    }

    get fGetSelectedData(): string {
        if (this.selectedData && Object.keys(this.selectedData).length > 0) {
            return `${this.selectedData["id"]}: ${this.selectedData[this.sField]}`;
        }
        return "";
    }

}
</script>

<style lang="scss">
</style>