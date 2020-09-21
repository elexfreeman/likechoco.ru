import * as express from 'express';
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { InventoryR as R  } from "../../../../Entity/Routes/InventoryR";
import { InventoryM } from './InventoryM';

const router = express.Router();

/**
/**
 * Контроллер 
 */
export class InventoryController extends System.BaseCtrl {

    public inventoryM: InventoryM;

    /**
     * Конструктор
     *
     * @param req
     * @param res
     */
    public async faInit() {
        // Инициализация бизнес моделей
        this.inventoryM = new InventoryM(this.req);
    }

}


/**
 * insert 
 */
router.post(R.insert.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Inventory add', () => {
        return ctrl.inventoryM.faInsert(req.body);
    })
});


/**
 * update 
 */
router.post(R.update.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Inventory update', () => {
        return ctrl.inventoryM.faUpdate(req.body);
    })
});

/**
 * get by id 
 */
router.post(R.getById.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Inventory get', () => {
        return ctrl.inventoryM.faGetById(req.body);
    })
});

/**
 * List
 */
router.post(R.list.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Inventory list', () => {
        return ctrl.inventoryM.faList(req.body);
    })
});

/**
 * List info
 */
router.post(R.listInfo.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Inventory list info', () => {
        return ctrl.inventoryM.faListInfo(req.body);
    })
});


/**
 * Inventory column 
 */
router.post(R.info.route, async (req: System.MainRequest, res: any, next: any) => {
    const ctrl = new InventoryController(req, res);
    await ctrl.faInit();
    await ctrl.userSys.isAuth(); // Пробуем авторизироваться
    await ctrl.faAction('Inventory column info', () => {
        return ctrl.inventoryM.faInfo(req.body);
    })
});
export {
    router as InventoryCtrl
}
