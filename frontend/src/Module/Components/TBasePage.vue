<template>
    <div>
        <div class="container pt-4">
            <h2>{{sCaption}}</h2>
            <div class="">
                <slot></slot>
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