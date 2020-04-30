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
const router = express.Router();
exports.ReceiptCtrl = router;
/**
 * Страница списка рецептов
 */
router.get(Router_1.ReceiptR.sUrl, ResponseSys_1.faResponseStatic(Router_1.ReceiptR.sTpl, MainRequest_1.TError.PageNotFound, async (req, res, error) => {
    return {};
}));
//# sourceMappingURL=ReceiptCtrl.js.map