import BaseM from "@a-a-game-studio/aa-core/lib/System/BaseM";
import { OrderSQL } from "./OrderSQL";

/**
 * Бизнес модель пользователя суда мы нас проксирует контроллер 1 url = 1 метод модели
 * Внутри метода делаем нужную бизнес логику
 */
export class OrderM extends BaseM {

    private orderSQL: OrderSQL;

    constructor(req: any) {
        super(req);

        this.orderSQL = new OrderSQL(req);
    }

    public async faMakeOrder() {
        
    }
}
