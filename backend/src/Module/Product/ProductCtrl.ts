import * as express from 'express';
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { faResponseStatic } from '@a-a-game-studio/aa-core/lib/System/ResponseSys';
import { ProductR as R  } from "../../../../Entity/Routes/ProductR";
import { TError, MainRequest } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import { ProductSQL } from './ProductSQL';
import { ProductM } from './ProductM';
const router = express.Router();

/**
/**
 * Контроллер 
 */
export class ProductController extends System.BaseCtrl {

    public productM: ProductM;

    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    public async faInit() {
        // Инициализация бизнес моделей
        this.productM = new ProductM(this.req);
    }

}

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductController(req, res);
    console.log('product');
    
    await ctrl.faInit();
    //await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Список товаров', () => {
        return ctrl.productM.faList(req.body);
    })
});

export {
    router as ProductCtrl
}
