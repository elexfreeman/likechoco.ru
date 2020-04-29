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
const FResponse_1 = require("../Module/Sys/FResponse");
const FErrors_1 = require("../Module/Sys/FErrors");
const VUser = __importStar(require("../Module/User/VUser"));
const FUser = __importStar(require("../Module/User/FUser"));
const VOrder = __importStar(require("../Module/Order/VOrder"));
const FOrder = __importStar(require("../Module/Order/BOrder"));
const FCommonOrder = __importStar(require("../Module/Order/FCommonOrder"));
const router = express.Router();
exports.OrderController = router;
/**
 * Index page
 * @param req
 * @param res
 * @param next
 */
const faCheckout = async (req, res, next) => {
    try {
        /* типизируем req */
        const body = req.body;
        /* валидируем данные пользваотеля */
        req.cValidator
            .fSetData(body['user'])
            .fSetErrorString('user')
            .fExist();
        req.cValidator.fProcess();
        /* решистрируем пользователя */
        /* валидируем поля */
        VUser.fVUserRegister(req.cValidator)(body['user'].name)(body['user'].surname)(body['user'].phone);
        req.cValidator.fProcess();
        /* записываем в DB */
        const userId = await FUser.faRegister(body['user'].name)(body['user'].surname)(body['user'].phone);
        /* ----------------------------------- */
        /* валидируем заказ */
        VOrder.fVMakeOrder(req.cValidator)(userId)(body['order']);
        req.cValidator.fProcess();
        /* записываем заказ */
        const orderId = await FOrder.fMakeOrder(userId)(body['order'])(FCommonOrder.fCalcOrderTotalSumm);
        /* отдаем ответ */
        res.send(FResponse_1.fResponse(true)(req.cValidator.fGetErrors())({
            order_id: orderId
        })('faCheckout'));
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
router.post('/order/checkout', faCheckout);
//# sourceMappingURL=OrderAPI.js.map