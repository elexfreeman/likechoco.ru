"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseM_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/System/BaseM"));
const OrderSQL_1 = require("./OrderSQL");
const V = __importStar(require("./OrderV"));
/**
 * Бизнес модель пользователя суда мы нас проксирует контроллер 1 url = 1 метод модели
 * Внутри метода делаем нужную бизнес логику
 */
class OrderM extends BaseM_1.default {
    constructor(req) {
        super(req);
        this.orderSQL = new OrderSQL_1.OrderSQL(req);
    }
    async faInit() {
        // Инициализация бизнес моделей
    }
    /**
     * Сделать заказ
     * @param data
     */
    async faMakeOrder(data) {
        data = V.makeOrder(this.req, data);
        let orderId = 0;
        let ok = this.errorSys.isOk();
        // --------------------------
        if (ok) { // Получить пользователя по токену
            orderId = await this.orderSQL.faOrderInsert({
                city: data.city,
                delivery_address: data.delivery_address,
                comment: data.comment,
                delivery_date: data.delivery_date,
                delivery_time_comment: data.delivery_time_comment,
                user_id: 0,
            });
        }
        // --------------------------
        let out = null;
        if (ok) { // Формирование ответа
            out = {
                order_id: orderId,
            };
        }
        return out;
    }
}
exports.OrderM = OrderM;
//# sourceMappingURL=OrderM.js.map