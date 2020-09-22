/**
 * Типы полей
 */
export enum ColumnTypeEnum {
    String = 0,
    Text = 1,
    Integer = 2,
    Float = 3,
    Data = 4,
}

/**
 * Столбцы в таблице
 */
export interface ColumnI {
    sName: string; // поле в таблице
    sCaption: string; // название в редактирование
    nType: ColumnTypeEnum; // тип поля
    bPrimaryKey: boolean; // признак id
}

/**
 * Таблица в DB 
 */
export interface TableI {
    sCaption: string; // название
    sDescription?: string; // описание
    aColumn: ColumnI[]; // столбцы
}


/**
 * Запрос-ответ для получения по ID
 */
export interface GetRowByIdRequestI {
    id: number;
}

/**
 * Запрос-ответ для получения по ID
 */
export interface GetRowByIdResponseI<T> {
    row: T;
}

export interface InsertRowResponseI {
    id: number;
}
export interface UpdateRowResponseI {
    id: number;
}


export interface RemoveDocRowReqestI {
    id: number;
}


// маршрты для основных операций
export const sGetInfoByIdR = 'row_info';
export const sGetTableInfo = 'info';
export const sInsertRow = 'insert';
export const sUpdateRow = 'update';
export const sList = 'list';
export const sListDocRow = 'list_doc_row';

// удаление строк табличного документа
export const sRemoveDocRow = 'delete_doc_rows';
// список строк документа
export const sGetDocRows = 'get_doc_rows';

