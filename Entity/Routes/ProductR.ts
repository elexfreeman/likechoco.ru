import { ProductI } from "../Interfaces/ProductI";
import { ProductTagI } from "../Interfaces/ProductTagI";
import { SearchParamI } from "../Service/SearchS";
import { ColumnI, PaginationOptionsI, ListInfoResponseI, ListResponseI } from "../Interfaces/ListI";
import { TableI } from "../Interfaces/TableI";
/**
 * Товар
 */
export namespace ProductR {
    // =======================================================
    /** Начальные данные */
    export namespace list {

        /** APIURL */
        export const route = '/api/product/list';

        /** Alias действия */
        export const action = 'list';

        /** Параметры api запроса */
        export interface RequestI extends SearchParamI {
        }

        /** Параметры api ответа */
        export interface ResponseI extends ListResponseI<ProductI> {
        }
    }
    export namespace listInfo {

        /** APIURL */
        export const route = '/api/product/list/info';

        /** Alias действия */
        export const action = 'listInfo';

        /** Параметры api запроса */
        export interface RequestI {
        }

        /** Параметры api ответа */
        export interface ResponseI extends ListInfoResponseI {
        }
    }

    //++++++++++++

    export namespace getById {

        /** APIURL */
        export const route = '/api/product/getById';

        /** Alias действия */
        export const action = 'getById';

        /** Параметры api запроса */
        export interface RequestI {
            id: number;
        }

        /** Параметры api ответа */
        export interface ResponseI extends ProductI {
        }
    }


    export namespace insert {

        /** APIURL */
        export const route = '/api/product/insert';

        /** Alias действия */
        export const action = 'insert';

        /** Параметры api запроса */
        export interface RequestI extends ProductI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
            id: number;
        }
    }

    export namespace update {

        /** APIURL */
        export const route = '/api/product/update';

        /** Alias действия */
        export const action = 'insert';

        /** Параметры api запроса */
        export interface RequestI extends ProductI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
            id: number;
        }
    }


    export namespace tagList {

        /** APIURL */
        export const route = '/api/product/tagList';

        /** Alias действия */
        export const action = 'tagList';

        /** Параметры api запроса */
        export interface RequestI {
            product_id: number;
        }

        /** Параметры api ответа */
        export interface ResponseI {
            list: ProductTagI[];
        }
    }

    export namespace addTag {

        /** APIURL */
        export const route = '/api/product/addTag';

        /** Alias действия */
        export const action = 'addTag';

        /** Параметры api запроса */
        export interface RequestI {
            product_id: number;
            tag_id: number;
        }

        /** Параметры api ответа */
        export interface ResponseI {
            id: number;
        }
    }

    export namespace delTag {

        /** APIURL */
        export const route = '/api/product/delTag';

        /** Alias действия */
        export const action = 'delTag';

        /** Параметры api запроса */
        export interface RequestI {
            product_id: number;
            tag_id: number;
        }

        /** Параметры api ответа */
        export interface ResponseI {
        }
    }


    export namespace info {

        /** APIURL */
        export const route = '/api/product/info';

        /** Alias действия */
        export const action = 'info';

        /** Параметры api запроса */
        export interface RequestI {
        }

        /** Параметры api ответа */
        export interface ResponseI extends TableI {
        }
    }
}

