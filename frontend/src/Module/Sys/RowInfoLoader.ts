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
    protected id: number;

    constructor(sUrl: string, id: number, baseModel: BaseModel) {
        super(sUrl, baseModel);
        this.id = id;
    }

    public async faLoadInfo(): Promise<any> {
        const url = `${this.sUrl}/row_info`;

        const respApi: ApiResponseI<any> =
            await this.baseModel.faApiRequest({ id: this.id }, url);

        return respApi.data;
    }
}