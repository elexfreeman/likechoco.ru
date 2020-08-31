import * as TableI from "../../../../Entity/Interfaces/TableI";
import { BaseModel } from "./BaseModel";
import { ApiResponseI } from "../../../../Entity/Interfaces/ApiResponseI";
import { BaseLoader } from "./BaseLoader";

/**
 * Загрузчик информации о строке в таблице 
 */
export class RowInfoLoader extends BaseLoader {

    protected sUrl: string;
    protected baseModel: BaseModel;

    constructor(sUrl: string, baseModel: BaseModel) {
        super(sUrl, baseModel);
    }

    public async faLoadInfo(id: number): Promise<TableI.GetRowByIdResponseI<any>> {
        const url = `${this.sUrl}/${TableI.sGetInfoByIdR}`;

        const respApi: ApiResponseI<TableI.GetRowByIdResponseI<any>> =
            await this.baseModel.faApiRequest({ id: id }, url);

        return respApi.data;
    }
}