export const IngredientStore = {
    state: () => ({
        bIsLoad: false,
        bIsShow: false,
    }),
    mutations: {
        setMenuStoreIsShow(state, data) {
            state.bIsShow = data;
        },
    },
    actions: {},
    getters: {}
}