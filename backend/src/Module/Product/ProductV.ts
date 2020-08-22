import * as Components from '@a-a-game-studio/aa-components/lib';
import { MainRequest } from "@a-a-game-studio/aa-core/lib/Namespace/System";

// =======================================================

// =======================================================
/**
 * List 
 *
 * @param req MainRequest
 * @param data RequestI
 */
export function list(req: MainRequest, data: any) {
    let rules = new Components.ModelRulesC();

    // ---------------------------------------

    rules.set(rules.rule('nOffset')
        .type(Components.ModelRulesT.int)
        .moreOrEq(0)
        .errorEx('nOffset', 'nOffset')
    );

    rules.set(rules.rule('nLimit')
        .type(Components.ModelRulesT.int)
        .moreOrEq(0)
        .errorEx('nLimit', 'nLimit')
    );

    rules.set(rules.rule('sSearchString')
        .type(Components.ModelRulesT.text)
        .minLen(2)
        .maxLen(100)
        .errorEx('sSearchString', 'sSearchString')
    );

    // ---------------------------------------

    let validator = new Components.ModelValidatorSys(req.sys.errorSys);
    validator.fValid(rules.get(), data);

    return validator.getResult();
}