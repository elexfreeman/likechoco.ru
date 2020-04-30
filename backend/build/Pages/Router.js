"use strict";
/**
 * Маршруты
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Главная
 */
exports.IndexR = {
    sUrl: "/",
    sTpl: "index"
};
/**
 * Корзина
 */
exports.CartR = {
    sUrl: "/cart",
    sTpl: "cart"
};
/**
 * Политика
 */
exports.PoliticR = {
    sUrl: "/politic",
    sTpl: "politic"
};
/**
 * Товар
 */
exports.ProductR = {
    sUrl: "/:url",
    sTpl: "product_page"
};
/**
 * Блог главная
 */
exports.BlogMainR = {
    sUrl: "/blog",
    sTpl: "blog/blog_main"
};
/**
 * Блог стр
 */
exports.BlogPageR = {
    sUrl: "/blog/:url",
    sTpl: "blog/blog_page"
};
//# sourceMappingURL=Router.js.map