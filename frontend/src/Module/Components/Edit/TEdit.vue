<template>
    <div v-if="!bIsLoad">
        <h4>{{cTableInfoLoader.sCaption}}</h4>
    </div>
</template>

<script lang='ts' >
import { Component, Prop, Vue } from "vue-property-decorator";
import * as TableI from "../../../../../Entity/Interfaces/TableI";
import { TableInfoLoader } from "../../Sys/TableInfoLoader";


@Component({
    name: "TTable",
})
export default class TTable extends Vue {
    //data
    private bIsLoad = true;
    

    // props
    @Prop({ required: true }) readonly cTableInfoLoader: TableInfoLoader;

    get isLoadin2g(): boolean {
        return false;
    }

    // methods

    async mounted() {
        console.log("mounted");
        await this.cTableInfoLoader.faLoadInfo()
        this.bIsLoad = false;
    }

    components: {};
}
</script>