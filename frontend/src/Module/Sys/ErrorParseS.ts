/**
 * Парсинг ошибок в ответе api
 */
export class ErrorParseS {

    protected data: Object;
    protected aDataKey: string[];

    constructor(data: Object) {
        this.data = data;
        this.aDataKey = Object.keys(data);
    }

    /**
     * Признак ошибки в ответе
     * @param sKey 
     */
    fIsError(sKey: string): boolean {
        let resp = false;
        for (let k = 0; k < this.aDataKey.length; k++) {
            if (this.aDataKey[k].indexOf(`valid_${sKey}_`) !== -1) {
                resp = true;
                break;
            }
        }
        return resp;
    }
}