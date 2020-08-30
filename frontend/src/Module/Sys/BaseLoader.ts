import { BaseModel } from "./BaseModel";

/**
 * Базовой загрузчик 
 */
export class BaseLoader {

    protected sUrl: string;
    protected baseModel: BaseModel;

    constructor(sUrl: string, baseModel: BaseModel) {
        this.sUrl = sUrl;
        this.baseModel = baseModel; 
    }

}