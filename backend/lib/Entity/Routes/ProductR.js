"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductR = void 0;
/**
 * Товар
 */
var ProductR;
(function (ProductR) {
    // =======================================================
    /** Начальные данные */
    let list;
    (function (list) {
        /** APIURL */
        list.route = '/api/product/list';
        /** Alias действия */
        list.action = 'list';
    })(list = ProductR.list || (ProductR.list = {}));
})(ProductR = exports.ProductR || (exports.ProductR = {}));
//# sourceMappingURL=ProductR.js.map