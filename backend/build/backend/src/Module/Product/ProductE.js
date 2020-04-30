"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            .require()
            .error('description - неверный формат'));
        rules.set(rules.rule('img')
            .type(lib_2.ModelRulesT.text)
            .require()
            .error('img - неверный формат'));
        rules.set(rules.rule('bgImg')
            .type(lib_2.ModelRulesT.text)
            .error('bgImg - неверный формат'));
        rules.set(rules.rule('url')
            .type(lib_2.ModelRulesT.text)
            .require()
            .error('url - неверный формат'));
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
ProductE.NAME = 'products';
//# sourceMappingURL=ProductE.js.map