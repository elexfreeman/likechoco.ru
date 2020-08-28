import { ListInfoResponseI, ListResponseI } from "../../../../Entity/Interfaces/ListI";
import { BaseModel } from "./BaseModel";
import { config } from "../../Config";
import { ApiResponseI } from "../../../../Entity/Interfaces/ApiResponseI";

/**
 * Обработчик списков для таблицы
 */
export class ListLoader {

    protected sUrl: string;
    protected baseModel: BaseModel;

    constructor(sUrl: string) {
        this.sUrl = sUrl;
        console.log(sUrl);
        
        this.baseModel = new BaseModel(config);
    }

    /**
     * Загрзка основного списка
     */
    public async faLoad(): Promise<ListResponseI<any>> {
        const url = config.apiUrl + '/' + this.sUrl + 'list';
        console.log(url);

        const respApi: ApiResponseI<ListResponseI<any>> =
            await this.baseModel.faApiRequest({}, url);
        return respApi.data;
    }

    /**
     * Информация о таблице
     */
    public async faGetInfo(): Promise<ListInfoResponseI> {
        console.log(this);
        
        const url = `${this.sUrl}/list/info`;
        console.log(url);
        
        const respApi: ApiResponseI<ListInfoResponseI> =
            await this.baseModel.faApiRequest({}, url);
        return respApi.data;
    }

}