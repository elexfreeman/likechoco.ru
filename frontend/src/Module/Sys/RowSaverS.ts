import * as TableI from "../../../../Entity/Interfaces/TableI";
import {BaseModel} from "./BaseModel";
import {ApiResponseI} from "../../../../Entity/Interfaces/ApiResponseI";
import {BaseLoader} from "./BaseLoader";

/**
 * Редактирование записей 
 */
export class RowSaverS extends BaseLoader {

  /**
   * вставить строчку в бд 
   * @param data 
   */
  public async faAdd(data: any): Promise<ApiResponseI<TableI.AddRowResponseI>> {
    const url = `${this.sUrl}/${TableI.sInsertRow}`;

    const respApi: ApiResponseI<TableI.AddRowResponseI> =
      await this.baseModel.faApiRequest(data, url);

    return respApi;
  }


  /**
   * обновить строчку в бд 
   * @param data 
   */
  public async faUpdate(data: any): Promise<ApiResponseI<TableI.UpdateRowResponseI>> {
    const url = `${this.sUrl}/${TableI.sUpdateRow}`;

    const respApi: ApiResponseI<TableI.UpdateRowResponseI> =
      await this.baseModel.faApiRequest(data, url);

    return respApi;
  }
}
