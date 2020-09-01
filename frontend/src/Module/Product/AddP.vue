<template>
    <TEditPage :fOk="() => {fOk();}" :fCancel="()=>{}" :sCaption="sCaption" :sRoute="sRoute">
        <template v-slot:content>
            <TEdit v-if="row" :sRoute="sRoute" :cTableInfoLoader="cTableInfoLoader" :row="row" />
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

@Component({
    components: { TEdit, TEditPage },
})
export default class EditP extends Vue {
    //data
    private isLoading = false;
    private row: any = {};
    private sCaption = "Добавление товара";
    private sRoute = "/product";
    // props

    // computed

    get cTableInfoLoader(): TableInfoLoader {
        return new TableInfoLoader(this.sRoute, new BaseModel(config));
    }

    // methods
    async mounted() {
        console.log("mounted");
    }

    async fOk() {}
}
</script>

<style lang="scss">
</style>