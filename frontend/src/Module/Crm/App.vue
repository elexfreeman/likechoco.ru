<template>
    <div class="crm">
        <div class="main-tpl">
            <div class="menu-tpl">
                <TopBaner />
                <LeftMenu />
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
import LeftMenu from "../Menu/LeftMenu.vue";


@Component({
    name: "App",
    components: { Menu, TopBaner, LeftMenu },
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