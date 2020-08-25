
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
     * Получить по id 
     * @param data 
     */
    public async faGetById(data: R.getById.RequestI): Promise<R.getById.ResponseI> {

        data = <R.getById.RequestI>V.getById(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let item: ProductI = null;
        if (ok) {
            item = await this.productSQL.faGetById(data.id);
        }

        // --------------------------

        let out: R.getById.ResponseI = null;
        if (ok) { // Формирование ответа
            out = item;
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


    /**
     * Вставка 
     * @param data 
     */
    public async faInsert(data: R.insert.RequestI): Promise<R.insert.ResponseI> {

        data = <R.insert.RequestI>V.insert(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let id: number = null;
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
     * Тэги товара
     * @param data 
     */
    public async faProductTagList(data: R.tagList.RequestI): Promise<R.tagList.ResponseI> {

        data = <R.tagList.RequestI>V.list(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let list: ProductTagI[] = null;
        if (ok) {
            list = await this.productSQL.faGetTagList(data.product_id)
        }

        // --------------------------

        let out: R.tagList.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                list: list,
            };
        }

        return out;
    }
}
