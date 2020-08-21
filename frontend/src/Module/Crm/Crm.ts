import Menu from "../Menu/Menu.vue";
export default {
    name: "Crm",
    data() {
        return {};
    }, // data
    props: {},
    mounted() { }, // mounted
    methods: {}, // methods
    computed: {
        isLogin() {
            return true;
        },
        onLoad() {
            return this.$store.onLoad;
        },
    }, // computed
    components: { Menu }, // components
};