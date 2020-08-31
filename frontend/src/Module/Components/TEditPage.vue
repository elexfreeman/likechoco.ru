<template>
    <TBasePage :sCaption="sCaption">
        <content></content>
        <div class="text-right">
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-outline-success">Cancel</button>
        </div>
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
    @Prop({ required: true }) readonly fOk: () => void;
    @Prop({ required: true }) readonly fCancel: () => void;

    // computed

    // methods
    async mounted() {
        console.log("mounted");
    }
}
</script>

<style lang="scss">
</style>