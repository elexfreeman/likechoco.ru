"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const OrderM_1 = require("./OrderM");
const BaseCtrl_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseCtrl"));
const OrderR_1 = require("../../../../Entry/Routes/OrderR");
const router = express.Router();
exports.OrderCtrl = router;
class OrderController extends BaseCtrl_1.default {
    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    async faInit() {
        // Инициализация бизнес моделей
        this.orderM = new OrderM_1.OrderM(this.req);
    }
}
exports.OrderController = OrderController;
router.post(OrderR_1.OrderR.makeOrder.route, async (req, res, next) => {
    const ctrl = new OrderController(req, res);
    await ctrl.faInit();
    await ctrl.faAction('Страница логин', () => {
        return ctrl.orderM.faMakeOrder(req.body);
    });
});
//# sourceMappingURL=OrderCtrl.js.map