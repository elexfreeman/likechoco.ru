"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCtrl = exports.ProductController = void 0;
const express = __importStar(require("express"));
const System = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/System"));
const ProductR_1 = require("../../../../Entity/Routes/ProductR");
const ProductM_1 = require("./ProductM");
const router = express.Router();
exports.ProductCtrl = router;
/**
/**
 * Контроллер
 */
class ProductController extends System.BaseCtrl {
    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    async faInit() {
        // Инициализация бизнес моделей
        this.productM = new ProductM_1.ProductM(this.req);
    }
}
exports.ProductController = ProductController;
/**
 * List
 */
router.post(ProductR_1.ProductR.list.route, async (req, res, next) => {
    const ctrl = new ProductController(req, res);
    await ctrl.faInit();
    //await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Список товаров', () => {
        return ctrl.productM.faList(req.body);
    });
});
//# sourceMappingURL=ProductCtrl.js.map