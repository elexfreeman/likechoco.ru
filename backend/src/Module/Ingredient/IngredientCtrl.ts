import * as express from 'express';
import { IngredientR as R } from "../../Pages/Router"
import { faResponseStatic } from '@a-a-game-studio/aa-core/lib/System/ResponseSys';
import { TError, MainRequest } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import { IngredientSQL } from './IngredientSQL';

const router = express.Router();


/**
 * Страница товара
 */
router.get(R.sUrl, faResponseStatic(R.sTpl, TError.PageNotFound,
    async (req: MainRequest, res: any, error: any) => {

        const ingredientSQL = new IngredientSQL(req);
        const Ingredient = await ingredientSQL.faGetByUrl(req.params['url']);

        req.seo.sTitle = `Likechoco - ${Ingredient.caption}`;
        req.seo.sDescription = `Likechoco - ${Ingredient.description}`;
        return {
            Ingredient: Ingredient,
        }
    })
);

export {
    router as IngredientCtrl
}
