import { ProductTagI } from "../Interfaces/ProductTagI";

/**
 * Тэг товара
 */
export namespace ProductTagR {
    // =======================================================
    /** Начальные данные */
    export namespace list {

        /** APIURL */
        export const route = '/api/productTag/list';

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
            list: ProductTagI[];
        }
    }
    export namespace getById {

        /** APIURL */
        export const route = '/api/productTag/getById';

        /** Alias действия */
        export const action = 'getById';

        /** Параметры api запроса */
        export interface RequestI {
            id: number;
        }

        /** Параметры api ответа */
        export interface ResponseI extends ProductTagI{
        }
    }


    export namespace insert {

        /** APIURL */
        export const route = '/api/productTag/insert';

        /** Alias действия */
        export const action = 'insert';

        /** Параметры api запроса */
        export interface RequestI extends ProductTagI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
            id: number;
        }
    }

    export namespace update {

        /** APIURL */
        export const route = '/api/productTag/update';

        /** Alias действия */
        export const action = 'insert';

        /** Параметры api запроса */
        export interface RequestI extends ProductTagI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
            id: number;
        }
    }

}

