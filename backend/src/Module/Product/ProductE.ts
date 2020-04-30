// Компоненты
import { Components } from '@a-a-game-studio/aa-classes/lib';
import { ModelRulesT } from '@a-a-game-studio/aa-components/lib';



export class ProductE {
    //Имя таблицы
    public static NAME = 'products';

    public getRulesInsert() {
        let rules = new Components.ModelRulesC();


        rules.set(rules.rule('caption')
            .type(ModelRulesT.text)
            .require()
            .error('caption - неверный формат')
        );     

        rules.set(rules.rule('description')
            .type(ModelRulesT.text)
            .require()
            .error('description - неверный формат')
        );     

        rules.set(rules.rule('img')
            .type(ModelRulesT.text)
            .require()
            .error('img - неверный формат')
        );     

        rules.set(rules.rule('bgImg')
            .type(ModelRulesT.text)
            .error('bgImg - неверный формат')
        );     

        rules.set(rules.rule('url')
            .type(ModelRulesT.text)
            .require()
            .error('url - неверный формат')
        );     

        rules.set(rules.rule('price')
            .type(ModelRulesT.int)
            .more(0)
            .require()
            .error('price - неверный формат')
        );     

        return rules.get();
    }

   
}
