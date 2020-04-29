"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EdR_1 = require("./EdR");
const FCommon_1 = require("../Sys/FCommon");
/**
 * Список единиц измерений
 */
exports.faList = async (req) => await FCommon_1.faRequestApi(EdR_1.EdR.list.route)(req);
//# sourceMappingURL=FEdAPI.js.map