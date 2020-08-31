<template>
    <div v-if="!bIsLoad">
        <h4>{{cTableInfoLoader.sCaption}}</h4>
        <div :key="key" v-for="(column, key) in cTableInfoLoader.aColumn">
            <div class="form-group">
                <label for="exampleInputEmail1">{{column.sCaption}}</label>

                <input
                    v-if="column.nType==ColumnTypeEnumInteger"
                    :disabled="column.sName=='id'"
                    v-model="row[column.sName]"
                    type="text"
                    class="form-control"
                />
                <input
                    v-if="column.nType==ColumnTypeEnumString"
                    :disabled="column.sName=='id'"
                    v-model="row[column.sName]"
                    type="text"
                    class="form-control"
                />
                <textarea
                    v-if="column.nType==ColumnTypeEnumText"
                    :disabled="column.sName=='id'"
                    v-model="row[column.sName]"
                    rows="4"
                    type="text"
                    class="form-control"
                ></textarea>
            </div>
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
    // маршрут в vue
    @Prop({ required: true }) readonly sRoute: string;

    get ColumnTypeEnumText(): number {
        return TableI.ColumnTypeEnum.Text;
    }
    get ColumnTypeEnumString(): number {
        return TableI.ColumnTypeEnum.String;
    }
    get ColumnTypeEnumInteger(): number {
        return TableI.ColumnTypeEnum.Integer;
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