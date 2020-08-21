import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { MenuStore } from "./Module/Menu/MenuStore";
import { IngredientStore } from "./Module/Ingredient/IngredientStore";
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        MenuStore: MenuStore,
        IngredientStore: IngredientStore,
    }
});

window['store'] = store;