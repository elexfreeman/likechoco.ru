import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { ProductR } from '../../../../Entity/Routes/ProductR';
import R = ProductR;
/**
 * Ингредиенты
 */
export declare class ProductM extends System.BaseM {
    private productSQL;
    constructor(req: any);
    faList(data: R.list.RequestI): Promise<R.list.ResponseI>;
}
