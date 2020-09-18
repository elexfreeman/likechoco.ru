<template>
    <TEditCmp
        :bIsLoad="bIsLoad"
        :fOk="() => fOk()"
        :fCancel="() => fCancel()"
        :sCaption="sCaption"
        :sRoute="sRoute"
    >
        <template v-slot:content>
            <TEdit
                v-if="row"
                :errorParseS="errorParseS"
                :sRoute="sRoute"
                :cTableInfoLoader="cTableInfoLoader"
                :row="row"
            />
        </template>
    </TEditCmp>
</template>

<script lang='ts'>

/**
 * Компонет добавления
 * Можно использовать для копипасты
 */

import { Component, Prop, Vue } from "vue-property-decorator";

import TTable from "../Components/Table/TTable.vue";
import TEditCmp from "../Components/TEditCmp.vue";
import TEdit from "../Components/Edit/TEdit.vue";

import { config } from "../../Config";
import { BaseModel } from "../Sys/BaseModel";

import { TableInfoLoader } from "../Sys/TableInfoLoader";
import { RowSaverS } from "../Sys/RowSaverS";
import { ErrorParseS } from "../Sys/ErrorParseS";

@Component({
    components: { TEdit, TEditCmp },
})
export default class AddCmp extends Vue {
    //data
    private bIsLoad = false;
    private row: any = {};
    private sCaption = "Добавление категории товара";
    private sRoute = "productCategory";

    private errorParseS: ErrorParseS = new ErrorParseS({});

    // props

    // нажата отмена
    @Prop({ required: true }) readonly fCancel: () => void;

    // колбэк добавления
    @Prop({ required: true }) readonly fOnAddClb: (id: number) => void;

    // computed

    get cTableInfoLoader(): TableInfoLoader {
        return new TableInfoLoader(this.sRoute, new BaseModel(config));
    }

    // methods
    async mounted() {
        console.log("mounted");
    }

    async fOk() {
        const rowSaverS = new RowSaverS(this.sRoute, new BaseModel(config));
        this.bIsLoad = true;
        const data = await rowSaverS.faAdd(this.row);
        this.bIsLoad = false;
        if (data.ok) {
            this.fOnAddClb(data.data.id);
        } else {
            this.errorParseS = new ErrorParseS(data.errors);
            console.log(this.errorParseS);
        }
    }
}
</script>

<style lang="scss">
</style>