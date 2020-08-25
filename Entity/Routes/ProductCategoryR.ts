import { ProductCategoryI } from "../Interfaces/ProductCategoryI";
import { SearchParamI } from "../Service/SearchS";

/**
 * Категория товара 
 */
export namespace ProductCategoryR {
    // =======================================================
    /** Начальные данные */
    export namespace list {

        /** APIURL */
        export const route = '/api/productCategory/list';

        /** Alias действия */
        export const action = 'list';

        /** Параметры api запроса */
        export interface RequestI extends SearchParamI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
            list: ProductCategoryI[];
        }
    }
    export namespace getById {

        /** APIURL */
        export const route = '/api/productCategory/getById';

        /** Alias действия */
        export const action = 'getById';

        /** Параметры api запроса */
        export interface RequestI {
            id: number;
        }

        /** Параметры api ответа */
        export interface ResponseI extends ProductCategoryI{
        }
    }


    export namespace insert {

        /** APIURL */
        export const route = '/api/productCategory/insert';

        /** Alias действия */
        export const action = 'insert';

        /** Параметры api запроса */
        export interface RequestI extends ProductCategoryI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
            id: number;
        }
    }

    export namespace update {

        /** APIURL */
        export const route = '/api/productCategory/update';

        /** Alias действия */
        export const action = 'insert';

        /** Параметры api запроса */
        export interface RequestI extends ProductCategoryI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
            id: number;
        }
    }

}

