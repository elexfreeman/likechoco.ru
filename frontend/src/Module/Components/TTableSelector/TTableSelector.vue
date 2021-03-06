<template>
    <div class="t-selector">
        <div v-on:click="fShowModal" class="t-selector-input form-control">
            <span>{{fGetSelectedData}}</span>
            <i class="fas fa-caret-down"></i>
        </div>

        <TModal
            :fOnClose="() => {fHideModal(); }"
            :sTitle="sModalCaption"
            :sSizeClass="fModalSize"
            :bIsOpen="bShowModal"
        >
            <template v-slot:content>
                <List
                    v-if="nModalRoute==0"
                    :tableLoader="tableLoader"
                    :fSelectField="fSelectField"
                    :sField="sField"
                    :bCanAdd="bCanAdd"
                    :fSetModalRoute="fSetModalRoute"
                />

                <!-- Компонент доавления в модалке -->
                <div :style="fShowAddModal">
                    <slot :fOnAddHandler="fOnAddHandler" name="add"></slot>
                </div>
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
import List from "./List.vue";

@Component({
    name: "TTableSelector",
    components: { TTable, TModal, List },
})
export default class TTableSelector extends Vue {
    //data
    private bShowModal = false;
    private selectedData: any = new Object();

    /**
     * Мрашрут модалки
     * 0 - list
     * 1 - add
     * 2 - edit
     */
    private nModalRoute: number = 0;

    // props

    // событие выбора
    @Prop({ required: true }) readonly fOnSelect: (data: any) => void;

    // загрузчик списка
    @Prop({ required: true }) readonly tableLoader: TableLoader;

    // поле для выбора
    @Prop({ required: true }) readonly sField: string;

    //Заголовок
    @Prop({ required: true }) readonly sModalCaption: string;

    // Для v-model
    @Prop({ required: false }) readonly value: number;

    // можно добавлять записи
    @Prop({ required: false, default: false }) readonly bCanAdd: boolean;

    // computed

    // methods
    async mounted() {
        console.log("mounted");
        this.tableLoader.listLoader.fAddColumn({
            label: "",
            field: "select_button",
            sortable: false,
        });

        if (this.value) {
            const respData = await this.tableLoader.rowInfoLoader.faLoadInfo(
                this.value
            );
            if (respData.ok) {
                this.selectedData = respData.data.row;
            }
        }
    }

    fShowModal() {
        this.bShowModal = true;
        this.nModalRoute = 0;
    }

    fHideModal() {
        this.bShowModal = false;
        this.nModalRoute = 0;
    }

    fSelectField(data: any) {
        this.bShowModal = false;
        this.selectedData = data;
        this.fOnSelect(data);
        this.$emit("input", data["id"]);
    }

    fSetModalRoute(nModalRoute: number) {
        this.nModalRoute = nModalRoute;
    }

    /**
     * событие добавления строчки
     * вызывается как колбэк в слоте добавления
     * это важно
     */
    fOnAddHandler() {
        this.fSetModalRoute(0);
    }

    get fModalSize(): string {
        return ModalSizeEnum.lg;
    }

    // показать добавление
    get fShowAddModal(): Object {
        let resp = {};
        if (this.nModalRoute == 0) {
            resp = { display: "none" };
        }

        return resp;
    }

    get fGetSelectedData(): string {
        if (this.selectedData && Object.keys(this.selectedData).length > 0) {
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