import { ProductCategoryI } from "../Interfaces/ProductCategoryI";
import { SearchParamI } from "../Service/SearchS";
import { ColumnI, PaginationOptionsI, ListInfoResponseI, ListResponseI } from "../Interfaces/ListI";
import { GetRowByIdResponseI, TableI, sGetInfoByIdR, sGetTableInfo, sInsertRow, sUpdateRow, InsertRowResponseI } from "../Interfaces/TableI";

export const sRoute = 'productCategory';

/**
 * Товар
 */
export namespace ProductCategoryR {
    // =======================================================
    /** Начальные данные */
    export namespace list {

        /** APIURL */
        export const route = `/api/${sRoute}/list`;

        /** Alias действия */
        export const action = `list`;

        /** Параметры api запроса */
        export interface RequestI extends SearchParamI {
        }

        /** Параметры api ответа */
        export interface ResponseI extends ListResponseI<ProductCategoryI> {
        }
    }
    export namespace listInfo {

        /** APIURL */
        export const route = `/api/${sRoute}/list/info`;

        /** Alias действия */
        export const action = `listInfo`;

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
        export const route = `/api/${sRoute}/${sGetInfoByIdR}`;

        /** Alias действия */
        export const action = `getById`;

        /** Параметры api запроса */
        export interface RequestI {
            id: number;
        }

        /** Параметры api ответа */
        export interface ResponseI extends GetRowByIdResponseI<ProductCategoryI> {
        }
    }


    export namespace insert {

        /** APIURL */
        export const route = `/api/${sRoute}/${sInsertRow}`;

        /** Alias действия */
        export const action = `insert`;

        /** Параметры api запроса */
        export interface RequestI extends ProductCategoryI {
        }

        /** Параметры api ответа */
        export interface ResponseI extends InsertRowResponseI {
            id: number;
        }
    }

    export namespace update {

        /** APIURL */
        export const route = `/api/${sRoute}/${sUpdateRow}`;

        /** Alias действия */
        export const action = `update`;

        /** Параметры api запроса */
        export interface RequestI extends ProductCategoryI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
            id: number;
        }
    }

    /**
     * Инфо об талице
     */
    export namespace info {

        /** APIURL */
        export const route = `/api/${sRoute}/${sGetTableInfo}`;

        /** Alias действия */
        export const action = `info`;

        /** Параметры api запроса */
        export interface RequestI {
        }

        /** Параметры api ответа */
        export interface ResponseI extends TableI {
        }
    }
}

