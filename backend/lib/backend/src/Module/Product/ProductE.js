"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductE = void 0;
// Компоненты
const lib_1 = require("@a-a-game-studio/aa-classes/lib");
const lib_2 = require("@a-a-game-studio/aa-components/lib");
class ProductE {
    getRulesInsert() {
        let rules = new lib_1.Components.ModelRulesC();
        rules.set(rules.rule('caption')
            .type(lib_2.ModelRulesT.text)
            .require()
            .error('caption - неверный формат'));
        rules.set(rules.rule('description')
            .type(lib_2.ModelRulesT.text)
            .error('description - неверный формат'));
        rules.set(rules.rule('price')
            .type(lib_2.ModelRulesT.int)
            .more(0)
            .require()
            .error('price - неверный формат'));
        return rules.get();
    }
    getRulesUpdate() {
        let rules = new lib_1.Components.ModelRulesC();
        rules.set(rules.rule('caption')
            .type(lib_2.ModelRulesT.text)
            .require()
            .error('caption - неверный формат'));
        rules.set(rules.rule('description')
            .type(lib_2.ModelRulesT.text)
            .error('description - неверный формат'));
        rules.set(rules.rule('price')
            .type(lib_2.ModelRulesT.int)
            .more(0)
            .require()
            .error('price - неверный формат'));
        return rules.get();
    }
}
exports.ProductE = ProductE;
//Имя таблицы
ProductE.NAME = 'product';
//# sourceMappingURL=ProductE.js.map