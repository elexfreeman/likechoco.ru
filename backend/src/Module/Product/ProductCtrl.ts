import * as express from 'express';
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { ProductR as R  } from "../../../../Entity/Routes/ProductR";
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
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Список товаров', () => {
        return ctrl.productM.faList(req.body);
    })
});

/**
 * insert 
 */
router.post(R.insert.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Добавление товаров', () => {
        return ctrl.productM.faInsert(req.body);
    })
});


/**
 * update 
 */
router.post(R.update.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Обновленеи товара', () => {
        return ctrl.productM.faUpdate(req.body);
    })
});

/**
 * get by id 
 */
router.post(R.getById.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Получение товара', () => {
        return ctrl.productM.faGetById(req.body);
    })
});

/**
 * Tag list 
 */
router.post(R.tagList.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Получение списка тэгов товара', () => {
        return ctrl.productM.faProductTagList(req.body);
    })
});

/**
 * Tag add 
 */
router.post(R.addTag.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Добавление тега товара', () => {
        return ctrl.productM.faAddTag(req.body);
    })
});

/**
 * Tag delete 
 */
router.post(R.delTag.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Удаление тега товара', () => {
        return ctrl.productM.faDelTag(req.body);
    })
});

export {
    router as ProductCtrl
}
