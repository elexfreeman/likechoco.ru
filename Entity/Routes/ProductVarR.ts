import { ProductVarI } from "../Interfaces/ProductVarI";
import { SearchParamI } from "../Service/SearchS";

/**
 * Категория товара 
 */
export namespace ProductVarR {
    // =======================================================
    /** Начальные данные */
    export namespace list {

        /** APIURL */
        export const route = '/api/productVar/list';

        /** Alias действия */
        export const action = 'list';

        /** Параметры api запроса */
        export interface RequestI extends SearchParamI {
            product_category_id: number;
        }

        /** Параметры api ответа */
        export interface ResponseI {
            list: ProductVarI[];
        }
    }
    export namespace getById {

        /** APIURL */
        export const route = '/api/productVar/getById';

        /** Alias действия */
        export const action = 'getById';

        /** Параметры api запроса */
        export interface RequestI {
            id: number;
        }

        /** Параметры api ответа */
        export interface ResponseI extends ProductVarI{
        }
    }


    export namespace insert {

        /** APIURL */
        export const route = '/api/productVar/insert';

        /** Alias действия */
        export const action = 'insert';

        /** Параметры api запроса */
        export interface RequestI extends ProductVarI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
            id: number;
        }
    }

    export namespace update {

        /** APIURL */
        export const route = '/api/productVar/update';

        /** Alias действия */
        export const action = 'insert';

        /** Параметры api запроса */
        export interface RequestI extends ProductVarI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
            id: number;
        }
    }

}

