import * as express from 'express';
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { ProductR as R  } from "../../../../Entity/Routes/ProductR";
import { ProductInfoM} from './ProductInfoM';

const router = express.Router();

/**
/**
 * Контроллер 
 */
export class ProductInfoController extends System.BaseCtrl {

    public productInfoM: ProductInfoM;

    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    public async faInit() {
        // Инициализация бизнес моделей
        this.productInfoM = new ProductInfoM(this.req);
    }

}

/**
 * List
 */
router.post(R.info.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new ProductInfoController(req, res);
    await ctrl.faInit();
    // await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Инфломация о строках товара', () => {
        return ctrl.productInfoM.faInfo(req.body);
    })
});


export {
    router as ProductInfoCtrl
}
