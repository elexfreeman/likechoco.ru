"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReceiptR;
(function (ReceiptR) {
    /* Список единиц измерений */
    let list;
    (function (list) {
        list.route = "/api/receipt/list";
    })(list = ReceiptR.list || (ReceiptR.list = {}));
    /* по ID */
    let getById;
    (function (getById) {
        getById.route = "/api/receipt/getById";
    })(getById = ReceiptR.getById || (ReceiptR.getById = {}));
    /* по URL */
    let getByUrl;
    (function (getByUrl) {
        getByUrl.route = "/receipt/:url";
    })(getByUrl = ReceiptR.getByUrl || (ReceiptR.getByUrl = {}));
})(ReceiptR = exports.ReceiptR || (exports.ReceiptR = {}));
//# sourceMappingURL=ReceiptR.js.map