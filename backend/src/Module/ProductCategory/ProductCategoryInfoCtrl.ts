import * as express from 'express';
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { ProductCategoryR as R } from "../../../../Entity/Routes/ProductCategoryR";
import { ProductCategoryInfoM } from './ProductCategoryInfoM';

const router = express.Router();

/**
/**
 * Контроллер 
 */
export class ProductCategoryInfoController extends System.BaseCtrl {

    public productCategoryInfoM: ProductCategoryInfoM;

    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    public async faInit() {
        // Инициализация бизнес моделей
        this.productCategoryInfoM = new ProductCategoryInfoM(this.req);
    }

}

/**
 * List
 */
router.post(R.info.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductCategoryInfoController(req, res);
    await ctrl.faInit();
    // await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Инфломация о строках товара', () => {
        return ctrl.productCategoryInfoM.faInfo(req.body);
    })
});


export {
    router as ProductCategoryInfoCtrl
}
