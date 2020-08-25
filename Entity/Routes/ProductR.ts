import { ProductI } from "../Interfaces/ProductI";
import { ProductTagI } from "../Interfaces/ProductTagI";

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
        export interface RequestI {
            nLimit: number;
            nOffset: number;
            sSearchString: string;
        }

        /** Параметры api ответа */
        export interface ResponseI {
            list: ProductI[];
        }
    }
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
        export interface ResponseI extends ProductI{
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

}

