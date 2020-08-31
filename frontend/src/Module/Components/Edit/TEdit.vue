<template>
    <div v-if="!bIsLoad">
        <h4>{{cTableInfoLoader.sCaption}}</h4>
        <div :key="key" v-for="(column, key) in cTableInfoLoader.aColumn">
            {{column}}
        </div>
    </div>
</template>

<script lang='ts' >
import { Component, Prop, Vue } from "vue-property-decorator";
import * as TableI from "../../../../../Entity/Interfaces/TableI";
import { TableInfoLoader } from "../../Sys/TableInfoLoader";
import { RowInfoLoader } from "../../Sys/RowInfoLoader";

@Component({
    name: "TEdit",
})
export default class TTable extends Vue {
    //data
    private bIsLoad = true;

    // props
    // Загрзчик таблицы
    @Prop({ required: true }) readonly cTableInfoLoader: TableInfoLoader;
    // Строка с данными
    @Prop({ required: true }) readonly row: any;

    get isLoadin2g(): boolean {
        return false;
    }

    // methods

    async mounted() {
        console.log("mounted");

        await this.cTableInfoLoader.faLoadInfo();
        this.bIsLoad = false;
    }

    components: {};
}
</script>