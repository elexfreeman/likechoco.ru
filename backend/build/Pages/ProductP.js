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
const Router_1 = require("./Router");
const MainRequest_1 = require("@a-a-game-studio/aa-core/lib/System/MainRequest");
const ProductSQL_1 = require("../Module/Product/ProductSQL");
const ResponseSys_1 = require("../Module/Sys/ResponseSys");
const router = express.Router();
exports.ProductCtrl = router;
/**
 * Индексная страница
 */
router.get(Router_1.ProductR.sUrl, ResponseSys_1.faResponseStaticL(Router_1.ProductR.sTpl, MainRequest_1.TError.PageNotFound, async (req, res, error) => {
    const sUrl = req.params['url'];
    const productSQL = new ProductSQL_1.ProductSQL(req);
    const product = await productSQL.faGetByUrl(sUrl);
    req.seo.sTitle = `Likechoco - ${product.caption}`;
    req.seo.sDescription = `Likechoco - ${product.description}`;
    return {
        product: product,
    };
}));
//# sourceMappingURL=ProductP.js.map