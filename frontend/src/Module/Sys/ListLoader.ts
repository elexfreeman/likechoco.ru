import { ListInfoResponseI, ListResponseI } from "../../../../Entity/Interfaces/ListI";
import { BaseModel } from "./BaseModel";
import { config } from "../../Config";
import { ApiResponseI } from "../../../../Entity/Interfaces/ApiResponseI";
import { SearchS } from "../../../../Entity/Service/SearchS";

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
    public async faLoad(searchS: SearchS): Promise<ListResponseI<any>> {

        const url = `${this.sUrl}/list`;
        console.log(url);

        const respApi: ApiResponseI<ListResponseI<any>> =
            await this.baseModel.faApiRequest(searchS, url);
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