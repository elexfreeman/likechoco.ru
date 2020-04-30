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
const ResponseSys_1 = require("../Module/Sys/ResponseSys");
const router = express.Router();
exports.CartController = router;
router.get(Router_1.CartR.sUrl, ResponseSys_1.faResponseStaticL(Router_1.CartR.sTpl, MainRequest_1.TError.PageNotFound, async (req, res, error) => {
    return {};
}));
//# sourceMappingURL=CartP.js.map