import * as express from 'express';
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { InventoryDocRowR as R  } from "../../../../Entity/Routes/InventoryDocRowR";
import { InventoryDocRowM } from './InventoryDocRowM';

const router = express.Router();

/**
/**
 * Контроллер 
 */
export class InventoryDocRowController extends System.BaseCtrl {

    public inventoryDocRowM: InventoryDocRowM;

    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    public async faInit() {
        // Инициализация бизнес моделей
        this.inventoryDocRowM = new InventoryDocRowM(this.req);
    }

}


/**
 * insert 
 */
router.post(R.insert.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryDocRowController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('InventoryDocRow add', () => {
        return ctrl.inventoryDocRowM.faInsert(req.body);
    })
});


/**
 * update 
 */
router.post(R.update.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryDocRowController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('InventoryDocRow update', () => {
        return ctrl.inventoryDocRowM.faUpdate(req.body);
    })
});

/**
 * get by id 
 */
router.post(R.getById.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryDocRowController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('InventoryDocRow get', () => {
        return ctrl.inventoryDocRowM.faGetById(req.body);
    })
});

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryDocRowController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('InventoryDocRow list', () => {
        return ctrl.inventoryDocRowM.faList(req.body);
    })
});

/**
 * List info
 */
router.post(R.listInfo.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryDocRowController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('InventoryDocRow list info', () => {
        return ctrl.inventoryDocRowM.faListInfo(req.body);
    })
});


/**
 * InventoryDocRow column 
 */
router.post(R.info.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryDocRowController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('InventoryDocRow column info', () => {
        return ctrl.inventoryDocRowM.faInfo(req.body);
    })
});
export {
    router as InventoryDocRowCtrl
}
