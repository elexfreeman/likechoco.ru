import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { ReceiptE, ReceiptI } from "./ReceiptE";

export class RecieptSQL extends BaseSQL {

    public async faList(): Promise<ReceiptI[]> {
        let ok = true;
        let resp: ReceiptI[];


        if (ok) {
            let sql = `SELECT * FROM ${ReceiptE.NAME} p`;

            try {
                resp = (await this.db.raw(sql, {}))[0];

            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'Reciept list', 'Не удалось получить информацию о рецептах');
            }
        }

        return resp;
    }

     /**
     * Получить товар по Url
     * @param sUrl 
     */
    public async faInsert(data: ReceiptI): Promise<number> {
        let resp: number = 0;
        let receiptE = new ReceiptE();


        try {

            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(receiptE.getRulesInsert(), data)) {
                throw 'validation error';
            }

            resp = (await this.db(ReceiptE.NAME)
                .insert(this.modelValidatorSys.getResult())
            )[0];


        } catch (e) {
            this.errorSys.errorEx(e, 'faReceiptInsert', 'Не удалось вставить заказ');
        }

        return resp;
    }


}

