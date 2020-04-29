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
const BReceiptSQL = __importStar(require("./BReceiptSQL"));
const ReceiptR_1 = require("./ReceiptR");
const router = express.Router();
exports.ReceiptController = router;
/**
 * Список
 * @param req
 * @param res
 * @param next
 */
const faListCtrl = async (req, res, next) => {
    try {
        const data = {
            list: await BReceiptSQL.faList()
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
 * ПО id
 * @param req
 * @param res
 * @param next
 */
const faGetByIdCtrl = async (req, res, next) => {
    try {
        const data = {
            item: await BReceiptSQL.faGetById(req.body['id'])
        };
        /* отдаем ответ */
        res.send(FResponse_1.fResponse(true)({})(data)('faGetByIdCtrl'));
    }
    catch (error) {
        req.errorType = FErrors_1.TError.Api;
        next(error);
    }
    ;
};
router.post(ReceiptR_1.ReceiptR.list.route, faListCtrl);
router.post(ReceiptR_1.ReceiptR.getById.route, faGetByIdCtrl);
//# sourceMappingURL=BReceiptAPI.js.map