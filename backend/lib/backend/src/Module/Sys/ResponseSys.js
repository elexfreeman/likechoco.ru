"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faResponseStaticL = void 0;
const ResponseSys_1 = require("@a-a-game-studio/aa-core/lib/System/ResponseSys");
/**
 * Функция рендера страницы
 * @param faCallback - функция контролера
 * @param tpl - путь к шаблону hbs
 */
exports.faResponseStaticL = (tpl, tError, faCallback) => {
    return async (req, res, next) => {
        try {
            const out = ResponseSys_1.fResponse(req, await faCallback(req));
            /* добавляем свою переменную */
            out.sApiVer = '1';
            out.Site = '';
            out.apiUrl = '/';
            console.log(out);
            res.render(tpl, out);
        }
        catch (error) {
            req.errorType = tError;
            next(error);
        }
    };
};
//# sourceMappingURL=ResponseSys.js.map