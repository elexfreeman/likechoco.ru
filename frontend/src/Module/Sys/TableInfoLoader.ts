import * as TableI from "../../../../Entity/Interfaces/TableI";
import { BaseModel } from "./BaseModel";
import { ApiResponseI } from "../../../../Entity/Interfaces/ApiResponseI";
import { BaseLoader } from "./BaseLoader";

/**
 * Загрузчик информации о таблице
 */
export class TableInfoLoader extends BaseLoader implements TableI.TableI {

    public sCaption: string = '';
    public sDescription: string = '';
    public aColumn: TableI.ColumnI[] = [];


    protected sUrl: string;
    protected baseModel: BaseModel;

    constructor(sUrl: string, baseModel: BaseModel) {
        super(sUrl, baseModel);
    }

    public fSetData(data: TableI.TableI) {
        this.aColumn = data.aColumn;
        this.sDescription = data.sDescription;
        this.sCaption = data.sCaption;
    }

    public async faLoadInfo(): Promise<TableI.TableI> {
        const url = `/${this.sUrl}/info`;

        const respApi: ApiResponseI<TableI.TableI> =
            await this.baseModel.faApiRequest({}, url);

        this.fSetData(respApi.data);

        return respApi.data;
    }
}