export const MenuStore = {
    state: () => ({
        bIsLoad: false,
        bIsShow: false,
        aStorehouse: [],
    }),
    mutations: {
        setMenuStoreIsShow(state, data) {
            state.bIsShow = data;
        },
        setMenuStoreAStorehouse(state, data) {
            state.aStorehouse = data;
        },
    },
    actions: {},
    getters: {}
}