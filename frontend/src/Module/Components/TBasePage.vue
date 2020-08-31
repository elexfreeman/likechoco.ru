<template>
    <div>
        <div class="container pt-4 page-content">
            <div class="slot-header d-flex justify-content-between align-items-center">
                <div class="header-caption">{{sCaption}}</div>
                <slot name="header"></slot>
            </div>
            <div class="">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
/**
 * Базовый компонент страницы 
 */
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
    name: "TBasePage",
    components: {},
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