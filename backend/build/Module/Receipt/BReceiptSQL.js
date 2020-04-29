"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DBConnect_1 = require("../Sys/DBConnect");
const SFunc_1 = require("../Sys/SFunc");
exports.RecieptTabel = 'receipt';
/**
 * Список
 */
exports.faList = async () => {
    const sql = `SELECT * FROM ${exports.RecieptTabel} e ORDER BY e.caption limit 10`;
    const rawData = await DBConnect_1.db.raw(sql, {});
    if (!SFunc_1.fGetFirst(rawData))
        throw `${exports.RecieptTabel} faList: not found`;
    return SFunc_1.fGetFirst(rawData);
};
/**
 * Получить по id
 * @param id
 */
exports.faGetById = async (id) => {
    const sql = `SELECT * FROM ${exports.RecieptTabel} where id=:id e limit 1`;
    const rawData = await DBConnect_1.db.raw(sql, { id: id });
    if (!SFunc_1.fGet2First(rawData))
        throw `${exports.RecieptTabel} faGetById: not found`;
    return SFunc_1.fGet2First(rawData);
};
//# sourceMappingURL=BReceiptSQL.js.map