"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DBConnect_1 = require("../Sys/DBConnect");
const SFunc_1 = require("../Sys/SFunc");
exports.BlogTabel = 'blog_page';
/**
 * Список товаров
 */
exports.faList = async () => {
    const sql = `SELECT * FROM ${exports.BlogTabel} b`;
    const rawData = await DBConnect_1.db.raw(sql, {});
    if (!SFunc_1.fGetFirst(rawData))
        throw 'Blog not found';
    return SFunc_1.fGetFirst(rawData);
};
exports.faById = async (id) => {
    let sql = `SELECT * 
        FROM ${exports.BlogTabel}  b
        WHERE b.id = :id 
        LIMIT 1`;
    const rawData = await DBConnect_1.db.raw(sql, {
        id: id
    });
    if (!SFunc_1.fGet2First(rawData))
        throw 'blog.faById: blog not found';
    return SFunc_1.fGet2First(rawData);
};
//# sourceMappingURL=FBlog.js.map