export enum ColumnTypeEnum {
    String = 0,
    Integer = 1,
    Float = 2,
    Data = 3,
}
export interface ColumnI {
    sName: string;
    nType: ColumnTypeEnum;
    bPrimaryKey: boolean;
}


export interface TableI {
    sCaption: string;
    sDescription?: string;
    aColumn: ColumnI[];
}
