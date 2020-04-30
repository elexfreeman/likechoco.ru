"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseSQL_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseSQL"));
const ReceiptE_1 = require("./ReceiptE");
class RecieptSQL extends BaseSQL_1.default {
    async faList() {
        let ok = true;
        let resp;
        if (ok) {
            let sql = `SELECT * FROM ${ReceiptE_1.ReceiptE.NAME} p`;
            try {
                resp = (await this.db.raw(sql, {}))[0];
            }
            catch (e) {
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
    async faInsert(data) {
        let resp = 0;
        let receiptE = new ReceiptE_1.ReceiptE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(receiptE.getRulesInsert(), data)) {
                throw 'validation error';
            }
            resp = (await this.db(ReceiptE_1.ReceiptE.NAME)
                .insert(this.modelValidatorSys.getResult()))[0];
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faReceiptInsert', 'Не удалось вставить заказ');
        }
        return resp;
    }
}
exports.RecieptSQL = RecieptSQL;
//# sourceMappingURL=ReceiptSQL.js.map