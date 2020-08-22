"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSQL = void 0;
const BaseSQL_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseSQL"));
const ProductE_1 = require("./ProductE");
/**
 * Продкты
 */
class ProductSQL extends BaseSQL_1.default {
    /**
     * Список
     */
    async faList(search) {
        let ok = true;
        let resp;
        if (ok) {
            let sql = `SELECT * FROM ${ProductE_1.ProductE.NAME} p LIMIT :nOffset, :nLimit`;
            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
            }
            catch (e) {
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
    async faGetById(id) {
        let ok = true;
        let resp = null;
        if (ok) {
            let sql = `SELECT p.* FROM ${ProductE_1.ProductE.NAME} p
            where p.id=:id`;
            try {
                resp = (await this.db.raw(sql, { id: id }))[0][0];
            }
            catch (e) {
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
    async faInsert(data) {
        let resp = 0;
        let productE = new ProductE_1.ProductE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productE.getRulesInsert(), data)) {
                throw 'validation error';
            }
            resp = (await this.db(ProductE_1.ProductE.NAME)
                .insert(this.modelValidatorSys.getResult()))[0];
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faProductInsert', 'Не удалось вставить заказ');
        }
        return resp;
    }
    /**
     * Обновить продукт
     * @param id
     * @param data
     */
    async faUpdate(id, data) {
        let ok = this.errorSys.isOk();
        let productE = new ProductE_1.ProductE();
        try {
            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(productE.getRulesUpdate(), data)) {
                throw 'validation error';
            }
            await this.db(ProductE_1.ProductE.NAME)
                .where({
                id: id
            })
                .update(this.modelValidatorSys.getResult());
        }
        catch (e) {
            this.errorSys.errorEx(e, 'faProductUpdate', 'Не удалось обновить');
        }
        return ok;
    }
}
exports.ProductSQL = ProductSQL;
//# sourceMappingURL=ProductSQL.js.map