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
const ResponseSys_1 = require("@a-a-game-studio/aa-core/lib/System/ResponseSys");
const MainRequest_1 = require("@a-a-game-studio/aa-core/lib/System/MainRequest");
const router = express.Router();
exports.PoliticController = router;
router.get(Router_1.PoliticR.sUrl, ResponseSys_1.faResponseStatic(Router_1.PoliticR.sTpl, MainRequest_1.TError.PageNotFound, async (req, res, error) => {
    return {};
}));
//# sourceMappingURL=PoliticP.js.map