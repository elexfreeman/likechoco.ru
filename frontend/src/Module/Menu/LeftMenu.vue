<template>
    <div class="left-menu">
        <div class="menu-group">
            <router-link :to="'/' + sProductR" class="h1-item">Товары</router-link>
            <div class="h2-item">Добавить</div>
            <div class="h2-item">Категории</div>
        </div>
    </div>
</template>

<script lang='ts'>
/**
 * Базовый компонент страницы
 */

import { sRoute as sProductR  } from "../../../../Entity/Routes/ProductR";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
    name: "LeftMenu",
    components: {},
})
export default class TopBaner extends Vue {
    //data
    private sProductR = sProductR;

    // props

    // computed

    // methods
    async mounted() {}
}
</script>

<style lang="scss">
</style>