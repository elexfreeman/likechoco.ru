import { InventoryDocRowI } from "../Interfaces/InventoryDocRowI";
import { ListDocRowResponseI, ListInfoResponseI, ListResponseI } from "../Interfaces/ListI";
import { GetRowByIdResponseI, TableI, sGetInfoByIdR, sGetTableInfo, sInsertRow, InsertRowResponseI, sListDocRow, sRemoveDocRow, RemoveDocRowReqestI } from "../Interfaces/TableI";

export const sRoute = 'inventory_doc_row';

/**
 * Инвентаризация 
 */
export namespace InventoryDocRowR {
    // =======================================================
    /** Начальные данные */
    export namespace listDocRow {

        /** APIURL */
        export const route = `/api/${sRoute}/${sListDocRow}`;

        /** Alias действия */
        export const action = `list_doc_row`;

        /** Параметры api запроса */
        export interface RequestI {
            id: number;
        }

        /** Параметры api ответа */
        export interface ResponseI extends ListDocRowResponseI<InventoryDocRowI> {
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


    export namespace insert {

        /** APIURL */
        export const route = `/api/${sRoute}/${sInsertRow}`;

        /** Alias действия */
        export const action = `insert`;

        /** Параметры api запроса */
        export interface RequestI extends InventoryDocRowI {
        }

        /** Параметры api ответа */
        export interface ResponseI extends InsertRowResponseI {
        }
    }

    export namespace removeDocRow {

        /** APIURL */
        export const route = `/api/${sRoute}/${sRemoveDocRow}`;

        /** Alias действия */
        export const action = `remove_doc_row`;

        /** Параметры api запроса */
        export interface RequestI extends RemoveDocRowReqestI {
        }

        /** Параметры api ответа */
        export interface ResponseI {
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

