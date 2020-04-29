"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DBConnect_1 = require("../Sys/DBConnect");
const SFunc_1 = require("../Sys/SFunc");
exports.EdTabel = 'ed';
/**
 * Список Единиц измерений
 */
exports.faList = async () => {
    const sql = `SELECT * FROM ${exports.EdTabel} e ORDER BY e.caption`;
    const rawData = await DBConnect_1.db.raw(sql, {});
    if (!SFunc_1.fGetFirst(rawData))
        throw `${exports.EdTabel} not found`;
    return SFunc_1.fGetFirst(rawData);
};
//# sourceMappingURL=BEdSQL.js.map