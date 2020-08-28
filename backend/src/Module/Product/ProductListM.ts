
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
// Системные классы

// Классы SQL Запросов
import { ProductSQL } from './ProductSQL';

// Роутинг
import { ProductR } from '../../../../Entity/Routes/ProductR';
import R = ProductR

// Валидация
import * as V from './ProductV'
import { SearchS } from "../../../../Entity/Service/SearchS";
import { ProductI } from "../../../../Entity/Interfaces/ProductI";
import { ProductTagI } from "../../../../Entity/Interfaces/ProductTagI";

/**
 * Товыры
 */
export class ProductListM extends System.BaseM {

    private productSQL: ProductSQL;

    constructor(req: any) {
        super(req);

        this.productSQL = new ProductSQL(req);
    }

    public async faList(data: R.list.RequestI): Promise<R.list.ResponseI> {

        data = <R.list.RequestI>V.list(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let aList: ProductI[] = [];
        let nTotal = 0;
        if (ok) {
            aList = await this.productSQL.faList(new SearchS().fSetParam(data));
            nTotal = await this.productSQL.faListTotal(new SearchS().fSetParam(data));
        }

        // --------------------------

        let out: R.list.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                list: aList,
                total: nTotal,
            };
        }

        return out;
    }

    public async faListInfo(data: R.list.RequestI): Promise<R.list.ResponseI> {

        data = <R.list.RequestI>V.list(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let aList: ProductI[] = [];
        let nTotal = 0;
        if (ok) {
            aList = await this.productSQL.faList(new SearchS().fSetParam(data));
            nTotal = await this.productSQL.faListTotal(new SearchS().fSetParam(data));
        }

        // --------------------------

        let out: R.list.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                list: aList,
                total: nTotal,
            };
        }

        return out;
    }

}
