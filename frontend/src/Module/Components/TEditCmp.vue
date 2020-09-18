<template>
    <div class>
        <slot name="content"></slot>
        <div class="t-edit-p text-right pb-4">
            <button
                :disabled="bIsLoad"
                v-on:click="fOk"
                type="button"
                class="btn btn-sm btn-success t-button"
            >Сохранить</button>
            <button v-on:click="fCancel" class="btn btn-sm btn-outline-success t-button">Отмена</button>
        </div>
    </div>
</template>

<script lang='ts'>
/**
 * Компонент редактирование - добавления
 */
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    name: "TEditCmp",
    components: {},
})
export default class MainP extends Vue {
    //data

    // props
    @Prop({ required: true }) readonly sCaption: string;
    // маршрут в vue
    @Prop({ required: true }) readonly sRoute: string;

    @Prop({ required: true }) readonly fOk: () => void;
    @Prop({ required: true }) readonly fCancel: () => void;
    @Prop({ required: true }) readonly bIsLoad: boolean;

    // computed

    // methods
    async mounted() {
        console.log("mounted");
    }
}
</script>

<style lang="scss">
</style>