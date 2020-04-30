import * as express from 'express';
import { IndexR as R} from "./Router"
import { TError, MainRequest } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import { ProductSQL } from '../Module/Product/ProductSQL';
import { faResponseStaticL } from '../Module/Sys/ResponseSys';

const router = express.Router();

/**
 * Индексная страница
 */
router.get(R.sUrl, faResponseStaticL(R.sTpl, TError.PageNotFound,
    async (req: MainRequest, res: any, error: any) => {

        const productSQL = new ProductSQL(req);
        const aProducts = await productSQL.faList();
        
        return {
            products: aProducts,
        }

    })
);

export {
    router as IndexController
}
