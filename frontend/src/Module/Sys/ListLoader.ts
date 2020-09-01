import { ListInfoResponseI, ListResponseI, ColumnI } from "../../../../Entity/Interfaces/ListI";
import { ApiResponseI } from "../../../../Entity/Interfaces/ApiResponseI";
import { SearchS } from "../../../../Entity/Service/SearchS";
import { BaseLoader } from "./BaseLoader";

/**
 * Обработчик списков для таблицы
 */
export class ListLoader extends BaseLoader {

    protected data: ListInfoResponseI;

    protected bIsInit: boolean;

    public fIsInit() {
        return this.bIsInit;
    }


    public fGetAColumn() {
        if (this.bIsInit) {
            return this.data.aColumn;
        }
        return null;
    }

    public fAddColumn(col: ColumnI): boolean {
        if (this.bIsInit) {
            this.data.aColumn.push(col);
            return true
        }
        return false;
    }



    public fGetPaginationOptions() {
        if (this.bIsInit) {
            return this.data.paginationOptions;
        }
        return null;
    }

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
    public async faInit(): Promise<ListInfoResponseI> {
        const url = `${this.sUrl}/list/info`;
        const respApi: ApiResponseI<ListInfoResponseI> =
            await this.baseModel.faApiRequest({}, url);
        this.data = respApi.data;
        this.bIsInit = true;
        return respApi.data;
    }

}