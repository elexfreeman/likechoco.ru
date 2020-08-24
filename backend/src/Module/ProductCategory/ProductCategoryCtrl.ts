import * as express from 'express';
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { ProductCategoryR as R  } from "../../../../Entity/Routes/ProductCategoryR";
import { ProductCategoryM } from './ProductCategoryM';

const router = express.Router();

/**
/**
 * Контроллер 
 */
export class ProductCategoryController extends System.BaseCtrl {

    public productCategoryM: ProductCategoryM;

    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    public async faInit() {
        // Инициализация бизнес моделей
        this.productCategoryM = new ProductCategoryM(this.req);
    }

}

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductCategoryController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Список товаров', () => {
        return ctrl.productCategoryM.faList(req.body);
    })
});

/**
 * insert 
 */
router.post(R.insert.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductCategoryController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Добавление товаров', () => {
        return ctrl.productCategoryM.faInsert(req.body);
    })
});


/**
 * update 
 */
router.post(R.update.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductCategoryController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Обновленеи товара', () => {
        return ctrl.productCategoryM.faUpdate(req.body);
    })
});

/**
 * get by id 
 */
router.post(R.getById.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductCategoryController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Получение товара', () => {
        return ctrl.productCategoryM.faGetById(req.body);
    })
});

export {
    router as ProductCategoryCtrl
}
