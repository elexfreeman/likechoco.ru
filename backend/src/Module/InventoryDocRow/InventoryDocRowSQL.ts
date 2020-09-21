import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { InventoryDocRowE } from "./InventoryDocRowE";
import { InventoryDocRowI, InventoryDocRowRowI } from "../../../../Entity/Interfaces/InventoryDocRowI";
import { SearchS } from "../../../../Entity/Service/SearchS";
import { InventoryDocRowRowE } from "./InventoryDocRowRowE";

/**
 * Продкты 
 */
export class InventoryDocRowSQL extends BaseSQL {

    /**
     * Список 
     */
    public async faList(search: SearchS): Promise<InventoryDocRowI[]> {
        let ok = true;
        let resp: InventoryDocRowI[];

        if (ok) {
            let sql = `SELECT * FROM ${InventoryDocRowE.NAME} p LIMIT :nOffset, :nLimit`;

            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'InventoryDocRow list', 'Не удалось получить информацию о InventoryDocRow');
            }
        }

        return resp;
    }

    /**
     * Список 
     */
    public async faListTotal(search: SearchS): Promise<number> {
        let ok = true;
        let resp: number = 0;

        if (ok) {
            let sql = `SELECT count(*) cc FROM ${InventoryDocRowE.NAME} p `;

            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0][0]['cc'];
            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faListTotal', 'Не удалось получить информацию о faListTotal');
            }
        }

        return resp;
    }


    /**
     * Получить InventoryDocRowI
     * @param id 
     */
    public async faGetById(id: number): Promise<InventoryDocRowI> {
        let ok = true;
        let resp: InventoryDocRowI = null;

        if (ok) {
            let sql = `SELECT p.* FROM ${InventoryDocRowE.NAME} p
            where p.id=:id`;

            try {
                resp = (await this.db.raw(sql, { id: id }))[0][0];

            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о InventoryDocRowI');
            }
        }

        return resp;
    }



    /**
     * Добавить 
     * @param data 
     */
    public async faInsert(data: InventoryDocRowI): Promise<number> {
        let resp: number = 0;
        let inventoryDocRowE = new InventoryDocRowE();

        try {

            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(inventoryDocRowE.getRulesInsert(), data)) {
                throw 'validation error';
            }

            resp = (await this.db(InventoryDocRowE.NAME)
                .insert(this.modelValidatorSys.getResult())
            )[0];


        } catch (e) {
            this.errorSys.errorEx(e, 'faInventoryDocRowInsert', 'Не удалось вставить заказ');
        }

        return resp;
    }


    /**
     * Добавить 
     * @param data 
     */
    public async faInsertRow(data: InventoryDocRowRowI): Promise<number> {
        let resp: number = 0;
        let inventoryDocRowRowE = new InventoryDocRowRowE();

        try {

            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(inventoryDocRowRowE.getRulesInsert(), data)) {
                throw 'validation error';
            }

            resp = (await this.db(InventoryDocRowE.NAME)
                .insert(this.modelValidatorSys.getResult())
            )[0];


        } catch (e) {
            this.errorSys.errorEx(e, 'faInsertRow', 'Не удалось вставить');
        }

        return resp;
    }


    /**
     * Обновить продукт 
     * @param id 
     * @param data 
     */
    public async faUpdate(id: number, data: InventoryDocRowI): Promise<boolean> {
        let ok = this.errorSys.isOk();
        let inventoryDocRowE = new InventoryDocRowE();

        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(inventoryDocRowE.getRulesUpdate(), data)) {
                throw 'validation error';
            }

            await this.db(InventoryDocRowE.NAME)
                .where({
                    id: id
                })
                .update(this.modelValidatorSys.getResult());
        } catch (e) {
            this.errorSys.errorEx(e, 'faInventoryDocRowUpdate', 'Не удалось обновить');
        }

        return ok;
    }


}




