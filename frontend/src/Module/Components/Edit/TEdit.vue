<template>
    <div v-if="paginationOptions">
    </div>
</template>

<script lang='ts' >
import { Component, Prop, Vue } from "vue-property-decorator";
import * as TableI from "../../../../../Entity/Interfaces/TableI";

@Component({
    name: "TTable",
})
export default class TTable extends Vue {
    //data
    

    get isLoadin2g(): boolean {
        return false;
    }

    // methods

    async mounted() {
        console.log("mounted");
    }

    components: {};
}
</script>