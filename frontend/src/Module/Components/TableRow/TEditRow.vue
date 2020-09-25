<template>
    <div class="t-edit-row">
        <div class="text-right pb-3">
            <button
                v-on:click="() => fOnAddhandler()"
                class="btn btn-primary btn-sm"
            >
                <i class="fa fa-plus"></i> Добавить
            </button>
        </div>
        <slot
            :key="key"
            v-for="(row, key) in aRow"
            :fOnRemoveHandler="fOnRemoveHandler"
            :row="row"
            :idx="key"
            name="rowSlot"
        ></slot>
    </div>
</template>

<script lang='ts'>
/**
 * Компонент табличная часть документа
 * например для заполения строк инвентариации склада
 * товар - кол-во - цена
 * товар - кол-во - цена
 * товар - кол-во - цена
 *
 * Входные параметры
 * sRoute - маршрут основного документа
 * sRouteDoc - маршрут табичной части
 */
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    name: "TEditRow",
    components: {},
})
export default class TEditRow extends Vue {
    //data
    private aRow: any[]; // массив строк

    // props
    // маршрут в vue
    @Prop({ required: true }) readonly sRoute: string;
    // маршрут таблицы строк документа
    @Prop({ required: true }) readonly sRouteDoc: string;

    // id документа
    @Prop({ required: true }) readonly docId: number;

    // computed
    // признак существования слота строки
    get bHasRowSlot(): boolean {
        return !!this.$slots.rowSlot;
    }

    // methods
    async mounted() {
        console.log("mounted");
    }

    /**
     * удалить строку по idx
     */
    fOnRemoveHandler(idx: number) {
        delete this.aRow[idx];
    }

    fOnAddhandler() {
        this.aRow.push({});
    }
}
</script>

<style lang="scss">
</style>