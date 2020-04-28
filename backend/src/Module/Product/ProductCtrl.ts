import * as express from 'express';
import { ProductR as R } from "../../Pages/Router"
import { faResponseStatic } from '@a-a-game-studio/aa-core/lib/System/ResponseSys';
import { TError, MainRequest } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import { ProductSQL } from './ProductSQL';

const router = express.Router();


/**
 * Страница товара
 */
router.get(R.sUrl, faResponseStatic(R.sTpl, TError.PageNotFound,
    async (req: MainRequest, res: any, error: any) => {

        const productSQL = new ProductSQL(req);
        const product = await productSQL.faGetByUrl(req.params['url']);

        req.seo.sTitle = `Likechoco - ${product.caption}`;
        req.seo.sDescription = `Likechoco - ${product.description}`;
        return {
            product: product,
        }
    })
);

export {
    router as ProductCtrl
}
