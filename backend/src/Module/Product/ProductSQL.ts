import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { ProductE } from "./ProductE";
import { ProductI } from "../../../../Entity/Interfaces/ProductI";
import { SearchS } from "../../../../Entity/Service/SearchS";

/**
 * Продкты 
 */
export class ProductSQL extends BaseSQL {

    /**
     * Список 
     */
    public async faList(search: SearchS): Promise<ProductI[]> {
        let ok = true;
        let resp: ProductI[];

        if (ok) {
            let sql = `SELECT * FROM ${ProductE.NAME} p LIMIT :nOffset, :nLimit`;

            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'Product list', 'Не удалось получить информацию о Product');
            }
        }

        return resp;
    }


    /**
     * Получить ProductI
     * @param id 
     */
    public async faGetById(id: number): Promise<ProductI> {
        let ok = true;
        let resp: ProductI = null;

        if (ok) {
            let sql = `SELECT p.* FROM ${ProductE.NAME} p
            where p.id=:id`;

            try {
                resp = (await this.db.raw(sql, { id: id }))[0][0];

            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о ProductI');
            }
        }

        return resp;
    }



    /**
     * Добавить 
     * @param data 
     */
    public async faInsert(data: ProductI): Promise<number> {
        let resp: number = 0;
        let productE = new ProductE();

        try {

            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productE.getRulesInsert(), data)) {
                throw 'validation error';
            }

            resp = (await this.db(ProductE.NAME)
                .insert(this.modelValidatorSys.getResult())
            )[0];


        } catch (e) {
            this.errorSys.errorEx(e, 'faProductInsert', 'Не удалось вставить заказ');
        }

        return resp;
    }


    /**
     * Обновить продукт 
     * @param id 
     * @param data 
     */
    public async faUpdate(id: number, data: ProductI): Promise<boolean> {
        let ok = this.errorSys.isOk();
        let productE = new ProductE();

        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productE.getRulesUpdate(), data)) {
                throw 'validation error';
            }

            await this.db(ProductE.NAME)
                .where({
                    id: id
                })
                .update(this.modelValidatorSys.getResult());
        } catch (e) {
            this.errorSys.errorEx(e, 'faProductUpdate', 'Не удалось обновить');
        }

        return ok;
    }

}




