
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

/**
 * Товыры
 */
export class ProductM extends System.BaseM {

    private productSQL: ProductSQL;

    constructor(req: any) {
        super(req);

        this.productSQL = new ProductSQL(req);
    }

    public async faList(data: R.list.RequestI): Promise<R.list.ResponseI> {

        data = <R.list.RequestI>V.list(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let vProduct: ProductI[] = [];
        if (ok) {
            vProduct = await this.productSQL.faList(new SearchS().fSetParam(data));
        }
        console.log(vProduct);

        // --------------------------

        let out: R.list.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                list: vProduct,
            };
        }

        return out;
    }

    /**
     * вставка 
     * @param data 
     */
    public async faInsert(data: R.insert.RequestI): Promise<R.insert.ResponseI> {

        data = <R.insert.RequestI>V.insert(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let id: number = 0;
        if (ok) {
            id = await this.productSQL.faInsert(data);
        }

        // --------------------------

        let out: R.insert.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                id,
            };

        }

        return out;
    }
    // =====================================

    /**
     * Обновленеи 
     * @param data 
     */
    public async faUpdate(data: R.update.RequestI): Promise<R.update.ResponseI> {

        data = <R.update.RequestI>V.update(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let id: number = data.id;
        if (ok) {
            await this.productSQL.faUpdate(id, data);
        }

        // --------------------------

        let out: R.update.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                id,
            };
        }

        return out;
    }
    // =====================================
}
