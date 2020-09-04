import * as express from 'express';
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { ProductCategoryR as R  } from "../../../../Entity/Routes/ProductCategoryR";
import { ProductCategoryListM } from './ProductCategoryListM';

const router = express.Router();

/**
/**
 * Контроллер 
 */
export class ProductCategoryListController extends System.BaseCtrl {

    public productListM: ProductCategoryListM;

    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    public async faInit() {
        // Инициализация бизнес моделей
        this.productListM = new ProductCategoryListM(this.req);
    }

}

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductCategoryListController(req, res);
    await ctrl.faInit();
    //await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Список товаров', () => {
        return ctrl.productListM.faList(req.body);
    })
});

/**
 * List
 */
router.post(R.listInfo.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductCategoryListController(req, res);
    await ctrl.faInit();
    //await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Список товаров', () => {
        return ctrl.productListM.faListInfo(req.body);
    })
});


export {
    router as ProductCategoryListCtrl
}
