<template>
    <div class="crm">
        <div class="main-tpl">
            <div class="menu-tpl">
                <TopBaner />
                <div class="menu-group">
                    <div class="h1-item">Товары</div>
                    <div class="h2-item">Добавить</div>
                    <div class="h2-item">Категории</div>
                </div>
            </div>
            <div class="content-tpl">
                <Menu />
                <router-view class="view"></router-view>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
/**
 * Базовый компонент страницы
 */
import { Component, Prop, Vue } from "vue-property-decorator";
import Menu from "../Menu/Menu.vue";
import TopBaner from "../Menu/TopBaner.vue";

@Component({
    name: "App",
    components: { Menu, TopBaner },
})
export default class App extends Vue {
    //data

    // props

    // computed

    // methods
    async mounted() {}
}
</script>

<style lang="scss">
</style>