export const aMenu = [
    {
        name: 'home',
        caption: 'Главная',
        url: '/',
    }
]


export default {
    name: "Menu",
    data() {
        return {};
    }, // data
    props: {},
    mounted() { }, // mounted
    methods: {
        fToggle() {
            this.$store.commit('setMenuStoreIsShow', !this.$store.state.MenuStore.bIsShow);
        }
    }, // methods
    computed: {
        isLogin() {
            return true;
        },
        bIsLoad() {
            return this.$store.state.MenuStore.bIsLoad;
        },
        bIsShow() {
            return this.$store.state.MenuStore.bIsShow;
        },
        aMenu(){
            return aMenu;
        } 

    }, // computed
    components: {}, // components
};