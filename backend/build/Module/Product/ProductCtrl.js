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
const Router_1 = require("../../Pages/Router");
const ResponseSys_1 = require("@a-a-game-studio/aa-core/lib/System/ResponseSys");
const MainRequest_1 = require("@a-a-game-studio/aa-core/lib/System/MainRequest");
const ProductSQL_1 = require("./ProductSQL");
const router = express.Router();
exports.ProductCtrl = router;
/**
 * Страница товара
 */
router.get(Router_1.ProductR.sUrl, ResponseSys_1.faResponseStatic(Router_1.ProductR.sTpl, MainRequest_1.TError.PageNotFound, async (req, res, error) => {
    const productSQL = new ProductSQL_1.ProductSQL(req);
    const product = await productSQL.faGetByUrl(req.params['url']);
    req.seo.sTitle = `Likechoco - ${product.caption}`;
    req.seo.sDescription = `Likechoco - ${product.description}`;
    return {
        product: product,
    };
}));
//# sourceMappingURL=ProductCtrl.js.map