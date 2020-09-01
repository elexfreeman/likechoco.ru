<template>
    <TBasePage :sCaption="sCaption">
        <template v-slot:content>
            <slot name="content"></slot>
            <div class="text-right pt-4">
                <button :disabled="bIsLoad" v-on:click="fOk" type="button" class="btn btn-success t-button">Сохранить</button>
                <router-link :to="sRoute" class="btn btn-outline-success t-button">Отмена</router-link>
            </div>
        </template>
    </TBasePage>
</template>

<script lang='ts'>

/**
 * Компонент страницы списка
 */
import { Component, Prop, Vue } from "vue-property-decorator";
import TBasePage from "./TBasePage.vue";

@Component({
    name: "TListPage",
    components: { TBasePage },
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