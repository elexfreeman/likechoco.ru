<template>
    <div class="container-fluid pt-4 page-content">
        <div class="slot-header d-flex justify-content-between align-items-center">
            <router-link :to="'/' + sRoute" class="header-caption">
                <div class="header-caption-item">
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div class="header-caption-item">{{sCaption}}</div>
            </router-link>
            <slot name="header"></slot>
        </div>
        <div class>
            <div>
                <div class="container pt-4 page-content">
                    <slot name="content"></slot>
                    <div class="text-right pt-4">
                        <button
                            :disabled="bIsLoad"
                            v-on:click="fOk"
                            type="button"
                            class="btn btn-success t-button"
                        >Сохранить</button>
                        <router-link
                            :to="'/' + sRoute"
                            class="btn btn-outline-success t-button"
                        >Отмена</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
/**
 * Компонент страницы редактирование - добавления 
 */
import { Component, Prop, Vue } from "vue-property-decorator";
import TBasePage from "./TBasePage.vue";

@Component({
    name: "TEditPage",
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