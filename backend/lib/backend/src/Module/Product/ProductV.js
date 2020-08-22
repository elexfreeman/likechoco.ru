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
exports.list = void 0;
const Components = __importStar(require("@a-a-game-studio/aa-components/lib"));
// =======================================================
// =======================================================
/**
 * List
 *
 * @param req MainRequest
 * @param data RequestI
 */
function list(req, data) {
    let rules = new Components.ModelRulesC();
    // ---------------------------------------
    rules.set(rules.rule('nOffset')
        .type(Components.ModelRulesT.int)
        .moreOrEq(0)
        .errorEx('nOffset', 'nOffset'));
    rules.set(rules.rule('nLimit')
        .type(Components.ModelRulesT.int)
        .moreOrEq(0)
        .errorEx('nLimit', 'nLimit'));
    rules.set(rules.rule('sSearchString')
        .type(Components.ModelRulesT.text)
        .minLen(2)
        .maxLen(100)
        .errorEx('sSearchString', 'sSearchString'));
    // ---------------------------------------
    let validator = new Components.ModelValidatorSys(req.sys.errorSys);
    validator.fValid(rules.get(), data);
    return validator.getResult();
}
exports.list = list;
//# sourceMappingURL=ProductV.js.map