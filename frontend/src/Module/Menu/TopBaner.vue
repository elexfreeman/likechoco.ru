<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">My app name</a>
    </nav>
</template>

<script lang='ts'>
/**
 * Базовый компонент страницы
 */
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
    name: "TopBaner",
    components: {},
})
export default class TopBaner extends Vue {
    //data

    // props

    // computed

    // methods
    async mounted() {
    }
}
</script>

<style lang="scss">
</style>