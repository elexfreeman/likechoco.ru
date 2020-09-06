<template>
    <div class="t-edit" v-if="!bIsLoad">
        <div :key="key" v-for="(column, key) in cTableInfoLoader.aColumn">
            <div class="form-group">
                <label>{{column.sCaption}}</label>
                <input
                    v-if="column.nType==ColumnTypeEnumInteger"
                    :disabled="column.sName=='id'"
                    v-model="row[column.sName]"
                    type="text"
                    class="form-control"
                    :class="{'is-invalid':errorParseS.fIsError(column.sName) }"
                />
                <input
                    v-if="column.nType==ColumnTypeEnumString"
                    :disabled="column.sName=='id'"
                    v-model="row[column.sName]"
                    type="text"
                    class="form-control"
                    :class="{'is-invalid':errorParseS.fIsError(column.sName) }"
                />
                <textarea
                    :class="{'is-invalid':errorParseS.fIsError(column.sName) }"
                    v-if="column.nType==ColumnTypeEnumText"
                    :disabled="column.sName=='id'"
                    v-model="row[column.sName]"
                    rows="4"
                    type="text"
                    class="form-control"
                ></textarea>
            </div>
        </div>
        <slot name="content"></slot>
    </div>
</template>

<script lang='ts' >
import { Component, Prop, Vue } from "vue-property-decorator";
import * as TableI from "../../../../../Entity/Interfaces/TableI";
import { TableInfoLoader } from "../../Sys/TableInfoLoader";
import { RowInfoLoader } from "../../Sys/RowInfoLoader";
import { ErrorParseS } from "../../Sys/ErrorParseS";

@Component({
    name: "TEdit",
})
export default class TEdit extends Vue {
    //data
    private bIsLoad = true;

    // props
    // Загрзчик таблицы
    @Prop({ required: true }) readonly cTableInfoLoader: TableInfoLoader;
    // Строка с данными
    @Prop({ required: true }) readonly row: any;
    // маршрут в vue
    @Prop({ required: true }) readonly sRoute: string;
    // ошибки
    @Prop({ required: true }) readonly errorParseS: ErrorParseS;

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