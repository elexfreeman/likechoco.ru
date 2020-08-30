import { ListInfoResponseI, ListResponseI } from "../../../../Entity/Interfaces/ListI";
import { ApiResponseI } from "../../../../Entity/Interfaces/ApiResponseI";
import { SearchS } from "../../../../Entity/Service/SearchS";
import { BaseLoader } from "./BaseLoader";

/**
 * Обработчик списков для таблицы
 */
export class ListLoader extends BaseLoader {


    /**
     * Загрзка основного списка
     */
    public async faLoad(searchS: SearchS): Promise<ListResponseI<any>> {
        const url = `${this.sUrl}/list`;
        const respApi: ApiResponseI<ListResponseI<any>> =
            await this.baseModel.faApiRequest(searchS, url);
        return respApi.data;
    }

    /**
     * Информация о таблице
     */
    public async faGetInfo(): Promise<ListInfoResponseI> {
        const url = `${this.sUrl}/list/info`;
        const respApi: ApiResponseI<ListInfoResponseI> =
            await this.baseModel.faApiRequest({}, url);
        return respApi.data;
    }

}