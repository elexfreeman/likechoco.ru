
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
// Системные классы

// Классы SQL Запросов
import { ProductCategorySQL } from './ProductCategorySQL';

// Роутинг
import { ProductCategoryR } from '../../../../Entity/Routes/ProductCategoryR';
import R = ProductCategoryR

// Валидация
import * as V from './ProductCategoryV'
import { SearchS } from "../../../../Entity/Service/SearchS";
import { ProductCategoryI } from "../../../../Entity/Interfaces/ProductCategoryI";

/**
 * Товыры
 */
export class ProductCategoryM extends System.BaseM {

    private productCategorySQL: ProductCategorySQL;

    constructor(req: any) {
        super(req);

        this.productCategorySQL = new ProductCategorySQL(req);
    }

    public async faList(data: R.list.RequestI): Promise<R.list.ResponseI> {

        data = <R.list.RequestI>V.list(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let vProductCategory: ProductCategoryI[] = [];
        if (ok) {
            vProductCategory = await this.productCategorySQL.faList(new SearchS().fSetParam(data));
        }

        // --------------------------

        let out: R.list.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                list: vProductCategory,
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

        let item: ProductCategoryI = null;
        if (ok) {
            item = await this.productCategorySQL.faGetById(data.id);
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
            await this.productCategorySQL.faUpdate(id, data);
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
            id = await this.productCategorySQL.faInsert(data);
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
}
