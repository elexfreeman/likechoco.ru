<template>
    <TBasePage :sCaption="sCaption">
        <div class="text-right pb-3">
            <button type="button" class="btn btn-primary"><i class="fa fa-plus"></i></button>
        </div>
        <slot></slot>
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

    // computed

    // methods
    async mounted() {
        console.log("mounted");
    }
}
</script>

<style lang="scss">
</style>