import CTable from "../../Components/Table/CTable.vue";
import TTable from "../../Components/Table/TTable.vue";
export default {
    name: "MainP",
    data() {
        return {};
    }, // data
    props: {},
    mounted() { }, // mountedsss
    methods: {}, // methods
    computed: {
        isLogin() {
            return true;
        },
        onLoad() {
            return this.$store.onLoad;
        },
        aRow() {
            return [
                { id: 1, caption: 'Caption' },
                { id: 1, caption: 'Caption' },
                { id: 1, caption: 'Caption' },
                { id: 1, caption: 'Caption' },
                { id: 1, caption: 'Caption' },
            ]
        },
        aColumn() {
            return [
                {
                    label: 'id',
                    field: 'id',
                },
                {
                    label: 'caption',
                    field: 'caption',
                },
            ]
        }
    }, // computed
    components: { CTable, TTable }, // components
};