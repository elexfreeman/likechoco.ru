<template>
    <div class="t-modal" :class="{'is-open': bIsOpen, 'start-close': bOnStartClose}">
        <div class="t-modal-bg"></div>
        <div class="modal" tabindex="-1">
            <div :class="fGetModalSize" class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{sTitle}}</h5>
                        <button
                            v-on:click="fOnModalClose"
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot name="content"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="buttons"></slot>
                        <button
                            v-on:click="fOnModalClose"
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
export enum ModalSizeEnum {
    sm = "modal-sm",
    default = "",
    lg = "modal-lg",
    xl = "modal-xl",
}

/**
 * Базовый компонент страницы
 */
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
    name: "TModal",
    components: {},
})
export default class MainP extends Vue {
    //data
    private bOnStartClose = false;

    // props

    // Заголовок
    @Prop({ required: true }) readonly sTitle: string;
    // событие закакрытия
    @Prop({ required: true }) readonly fOnClose: () => void;
    // признак открытия
    @Prop({ required: false }) readonly bIsOpen: boolean;
    // размер
    @Prop({ required: false }) readonly sSizeClass: ModalSizeEnum;

    // computed

    get fGetModalSize(): Object {
        let resp = {};
        if (this.sSizeClass) {
            resp[this.sSizeClass] = true;
        }
        return resp;
    }

    // methods
    async mounted() {
        console.log("mounted");
    }

    fOnModalClose(e) {
        this.bOnStartClose = true;
        setTimeout(() => {
            this.fOnClose();
            this.bOnStartClose = false;
        }, 100);
    }
}
</script>

<style lang="scss">
</style>