<template>
    <TEditPage :fOk="()=> {}" :fCancel="()=>{}" :sCaption="'Товар'" :sRoute="'/product'">
        <template v-slot:content>
            <TEdit v-if="row" :sRoute="'/product'" :cTableInfoLoader="cTableInfoLoader" :row="row" />
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
export default class MainP extends Vue {
    //data
    private isLoading = false;
    private row: any = {};
    // props

    // computed

    get cTableInfoLoader(): TableInfoLoader {
        return new TableInfoLoader("/product", new BaseModel(config));
    }

    // methods
    async mounted() {
        console.log("mounted");
        const cRowLoader = new RowInfoLoader("/product", new BaseModel(config));
        this.row = await cRowLoader.faLoadInfo(
            Number(this.$route.params["id"])
        );
    }
}
</script>

<style lang="scss">
</style>