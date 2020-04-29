"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReceiptR_1 = require("./ReceiptR");
const FCommon_1 = require("../Sys/FCommon");
/**
 * Список единиц измерений
 */
exports.faList = async (req) => await FCommon_1.faRequestApi(ReceiptR_1.ReceiptR.list.route)(req);
//# sourceMappingURL=FReceiptAPI.js.map