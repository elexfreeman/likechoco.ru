import * as express from 'express';
import { ProductR as R} from "./Router"
import { TError, MainRequest } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import { ProductSQL } from '../Module/Product/ProductSQL';
import { faResponseStaticL } from '../Module/Sys/ResponseSys';

const router = express.Router();

/**
 * Индексная страница
 */
router.get(R.sUrl, faResponseStaticL(R.sTpl, TError.PageNotFound,
    async (req: MainRequest, res: any, error: any) => {

        const sUrl = req.params['url'];
        const productSQL = new ProductSQL(req);

        const product = await productSQL.faGetByUrl(sUrl);

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
