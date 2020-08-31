export enum ColumnTypeEnum {
    String = 0,
    Text = 1,
    Integer = 2,
    Float = 3,
    Data = 4,
}
export interface ColumnI {
    sName: string; // поле в таблице
    sCaption: string; // название в редактирование
    nType: ColumnTypeEnum; // тип поля
    bPrimaryKey: boolean; // признак id
}


export interface TableI {
    sCaption: string;
    sDescription?: string;
    aColumn: ColumnI[];
}

export interface GetRowByIdRequestI {
    id: number;
}
export interface GetRowByIdResponseI<T> {
    row: T;
}


export const sGetInfoByIdR = 'row_info';
export const sGetTableInfo = 'info';
