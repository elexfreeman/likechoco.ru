import * as express from 'express';
import { faResponseStatic } from '@a-a-game-studio/aa-core/lib/System/ResponseSys';
import { TError, MainRequest } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import { OrderM } from './OrderM';
import BaseCtrl from '@a-a-game-studio/aa-core/lib/System/BaseCtrl';
import { OrderR as R} from "../../../../Entity/Routes/OrderR";

const router = express.Router();

export class OrderController extends BaseCtrl {

    public orderM: OrderM;

    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    public async faInit() {
        // Инициализация бизнес моделей
        this.orderM = new OrderM(this.req);

    }

}

router.post(R.makeOrder.route, async (req: MainRequest, res: any, next: any) => {
    const ctrl = new OrderController(req, res);
    await ctrl.faInit();
    await ctrl.faAction('Страница логин', () => {
        return ctrl.orderM.faMakeOrder(req.body);
    })
});


export {
    router as OrderCtrl
}
