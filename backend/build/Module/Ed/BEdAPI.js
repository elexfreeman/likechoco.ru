"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const FResponse_1 = require("../Sys/FResponse");
const FErrors_1 = require("../Sys/FErrors");
const BEdSQL = __importStar(require("./BEdSQL"));
const EdR_1 = require("./EdR");
const router = express.Router();
exports.EdController = router;
/**
 * Список единиц измерений
 * @param req
 * @param res
 * @param next
 */
const faListCtrl = async (req, res, next) => {
    try {
        const data = {
            list: await BEdSQL.faList()
        };
        /* отдаем ответ */
        res.send(FResponse_1.fResponse(true)({})(data)('faListCtrl'));
    }
    catch (error) {
        req.errorType = FErrors_1.TError.Api;
        next(error);
    }
    ;
};
/**
 * Страница товара
 */
router.post(EdR_1.EdR.list.route, faListCtrl);
//# sourceMappingURL=BEdAPI.js.map