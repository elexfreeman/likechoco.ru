<template>
    <TBasePage :sCaption="sCaption">
        <template v-slot:header>
            <slot name="header"></slot>
            <div class="text-right">
                <router-link :to="`${sRoute}/add`" class="btn btn-primary">
                    <i class="fa fa-plus"></i> Добавить
                </router-link>
            </div>
        </template>
        <template v-slot:content>
            <slot name="content"></slot>
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
    @Prop({ required: true }) readonly sRoute : string;

    // computed

    // methods
    async mounted() {
        console.log("mounted");
    }
}
</script>

<style lang="scss">
</style>