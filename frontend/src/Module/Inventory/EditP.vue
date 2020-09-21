<template>
    <TEditPage
        :bIsLoad="bIsLoad"
        :fOk="() => {fOk();}"
        :fCancel="() => {fCancel();}"
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
    </TEditPage>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import TTable from "../../Components/Table/TTable.vue";

import { RowI, ColumnI } from "../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../Entity/Service/PaginationOptionsS";
import { config } from "../../Config";
import { BaseModel } from "../Sys/BaseModel";

import TEdit from "../Components/Edit/TEdit.vue";
import { RowInfoLoader } from "../Sys/RowInfoLoader";
import { TableInfoLoader } from "../Sys/TableInfoLoader";
import TEditPage from "../Components/TEditPage.vue";
import { RowSaverS } from "../Sys/RowSaverS";
import { ErrorParseS } from "../Sys/ErrorParseS";

@Component({
    components: { TEdit, TEditPage },
})
export default class EditP extends Vue {
    //data
    private bIsLoad = false;
    private row: any = {};
    private sCaption = "Редактирование категории товара";
    private sRoute = "inventory";
    private errorParseS: ErrorParseS = new ErrorParseS({});

    // props

    // computed

    get cTableInfoLoader(): TableInfoLoader {
        return new TableInfoLoader(this.sRoute, new BaseModel(config));
    }

    // methods
    async mounted() {
        this.errorParseS = new ErrorParseS({});
        const cRowLoader = new RowInfoLoader(
            this.sRoute,
            new BaseModel(config)
        );
        this.row = (
            await cRowLoader.faLoadInfo(Number(this.$route.params["id"]))
        ).data.row;
    }

    /**
     * событие сохранения
     */
    async fOk() {
        const rowSaverS = new RowSaverS(this.sRoute, new BaseModel(config));
        this.bIsLoad = true;
        const data = await rowSaverS.faUpdate(this.row);
        this.bIsLoad = false;
        if (data.ok) {
            this.$router.push("/" + this.sRoute);
        } else {
            this.errorParseS = new ErrorParseS(data.errors);
        }
    }

    async fCancel() {
        this.$router.push({ path: "/" + this.sRoute });
    }
}
</script>

<style lang="scss">
</style>