import { ListLoader } from "../../Sys/ListLoader";
export default {
    name: "CTable",
    data() {
        return {
            totalRecords: 10,
            isLoading: false,
        };
    }, // data
    props: ['aRow', 'aColumn', 'cListLoader'],
    mounted() { }, // mountedsss
    methods: {
        updateParams(newProps) {
            this.serverParams = Object.assign({}, this.serverParams, newProps);
        },

        onPageChange(params) {
            this.updateParams({ page: params.currentPage });
            this.loadItems();
        },

        onPerPageChange(params) {
            this.updateParams({ perPage: params.currentPerPage });
            this.loadItems();
        },

        onSortChange(params) {
            this.updateParams({
                sort: [{
                    type: params.sortType,
                    field: this.columns[params.columnIndex].field,
                }],
            });
            this.loadItems();
        },

        onColumnFilter(params) {
            this.updateParams(params);
            this.loadItems();
        },

          // load items is what brings back the rows from server
        loadItems() {
            const listLoader:ListLoader = <ListLoader>this.cListLoader;
            listLoader.faLoad();
        }
    }, // methods
    computed: {

    }, // computed
    components: {}, // components
};