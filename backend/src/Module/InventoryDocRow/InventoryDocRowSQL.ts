import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { InventoryDocRowE } from "./InventoryDocRowE";
import { InventoryDocRowI } from "../../../../Entity/Interfaces/InventoryDocRowI";
import { SearchS } from "../../../../Entity/Service/SearchS";

/**
 * Продкты 
 */
export class InventoryDocRowSQL extends BaseSQL {

    /**
     * Список 
     */
    public async faListDocRow(id: number): Promise<InventoryDocRowI[]> {
        let ok = true;
        let resp: InventoryDocRowI[];

        if (ok) {
            let sql = `SELECT * FROM ${InventoryDocRowE.NAME} p
            where p.${InventoryDocRowE.DOC_NAME}_id = :id`;
            try {
                resp = (await this.db.raw(sql, {
                    id: id
                }))[0];
            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'InventoryDocRow list', 'Не удалось получить faListDocRow');
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
            this.errorSys.errorEx(e, 'faInventoryDocRowInsert', 'Не удалось вставить ');
        }

        return resp;
    }


    public async faGetDocRowIds(id: number): Promise<number[]> {

        let ok = true;
        let resp: number[] = [];

        if (ok) {
            let sql = `SELECT id FROM ${InventoryDocRowE.NAME} p
            where p.${InventoryDocRowE.DOC_NAME}_id = :id`;

            try {
                const aData = (await this.db.raw(sql, { id: id }))[0];

                resp = resp.map((item: any, key) => {
                    return item.id;
                });

            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetDocRowIds', 'Не удалось список id строк документа');
            }
        }

        return resp;
    }


    /**
     * Удаляет строки из таблчного документа 
     * @param id - документ
     */
    public async faRemoveDocRow(id: number): Promise<boolean> {
        let ok = true;

        if (ok) {
            try {
                const aDeleteIds: number[] = await this.faGetDocRowIds(id);
                await this.db(InventoryDocRowE.NAME)
                    .whereIn('id', aDeleteIds)
                    .del();
            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faRemoveDocRow', 'Не удалось удалить строки документа');
            }
        }

        return ok;
    }


}




