import { InventoryI } from "../Interfaces/InventoryI";
import { SearchParamI } from "../Service/SearchS";
import { ColumnI, PaginationOptionsI, ListInfoResponseI, ListResponseI } from "../Interfaces/ListI";
import { GetRowByIdResponseI, TableI, sGetInfoByIdR, sGetTableInfo, sInsertRow, sUpdateRow, AddRowResponseI } from "../Interfaces/TableI";

export const sRoute = 'inventory';

/**
 * Товар
 */
export namespace InventoryR {
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
        export interface ResponseI extends ListResponseI<InventoryI> {
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
        export interface ResponseI extends GetRowByIdResponseI<InventoryI> {
        }
    }


    export namespace insert {

        /** APIURL */
        export const route = `/api/${sRoute}/${sInsertRow}`;

        /** Alias действия */
        export const action = `insert`;

        /** Параметры api запроса */
        export interface RequestI extends InventoryI {
        }

        /** Параметры api ответа */
        export interface ResponseI extends AddRowResponseI {
            id: number;
        }
    }

    export namespace update {

        /** APIURL */
        export const route = `/api/${sRoute}/${sUpdateRow}`;

        /** Alias действия */
        export const action = `update`;

        /** Параметры api запроса */
        export interface RequestI extends InventoryI {
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

