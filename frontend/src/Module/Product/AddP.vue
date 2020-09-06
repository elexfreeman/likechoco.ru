<template>
    <TEditPage
        :bIsLoad="bIsLoad"
        :fOk="() => {fOk();}"
        :fCancel="()=>{}"
        :sCaption="sCaption"
        :sRoute="sRoute"
    >
        <template v-slot:content>
            <TEdit
                :errorParseS="errorParseS"
                v-if="row"
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
export default class AddP extends Vue {
    //data
    private bIsLoad = false;
    private row: any = {};
    private sCaption = "Добавление товара";
    private sRoute = "product";

    private errorParseS: ErrorParseS = new ErrorParseS({});
    // props

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
            this.$router.push("/" + this.sRoute);
        } else {
            this.errorParseS = new ErrorParseS(data.errors);
            console.log(this.errorParseS);
            
        }
    }
}
</script>

<style lang="scss">
</style>