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
exports.ProductCtrl = void 0;
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