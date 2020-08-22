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
exports.ProductM = void 0;
const System = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/System"));
// Системные классы
// Классы SQL Запросов
const ProductSQL_1 = require("./ProductSQL");
// Валидация
const V = __importStar(require("./ProductV"));
const SearchS_1 = require("../../../../Entity/Service/SearchS");
/**
 * Ингредиенты
 */
class ProductM extends System.BaseM {
    constructor(req) {
        super(req);
        this.productSQL = new ProductSQL_1.ProductSQL(req);
    }
    async faList(data) {
        data = V.list(this.req, data);
        let ok = this.errorSys.isOk();
        // --------------------------
        let vProduct = [];
        if (ok) {
            vProduct = await this.productSQL.faList(new SearchS_1.SearchS().fSetParam(data));
        }
        console.log(vProduct);
        // --------------------------
        let out = null;
        if (ok) { // Формирование ответа
            out = {
                list: vProduct,
            };
        }
        return out;
    }
}
exports.ProductM = ProductM;
//# sourceMappingURL=ProductM.js.map