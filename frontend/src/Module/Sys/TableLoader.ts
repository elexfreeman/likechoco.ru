import { BaseConfig } from "./BaseConfig";
import { BaseModel } from "./BaseModel";
import { ListLoader } from "./ListLoader";
import { RowInfoLoader } from "./RowInfoLoader";
import { RowSaverS } from "./RowSaverS";
import { TableInfoLoader } from "./TableInfoLoader";

/**
 * Обработчик списков для таблицы
 */
export class TableLoader {

    protected sUrl: string = '';

    public baseModel: BaseModel;
    public listLoader: ListLoader;
    public rowInfoLoader: RowInfoLoader
    public rowSaver: RowSaverS;
    public tableInfoLoader: TableInfoLoader;

    constructor(sUrl: string, config: BaseConfig) {
        this.baseModel = new BaseModel(config);
        this.sUrl = sUrl;
        this.rowInfoLoader = new RowInfoLoader(sUrl, this.baseModel);
        this.tableInfoLoader = new TableInfoLoader(sUrl, this.baseModel);
        this.listLoader = new ListLoader(sUrl, this.baseModel)
    }

}