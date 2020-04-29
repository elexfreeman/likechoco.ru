import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { OrderI } from "./OrderE";
/**
 * Товары
 */
export declare class OrderSQL extends BaseSQL {
    /**
     * Список товаров
     */
    faList(): Promise<OrderI[]>;
    /**
     * Получить товар по Url
     * @param sUrl
     */
    faOrderInsert(data: OrderI): Promise<number>;
}
/**
 * обработка BgImg
 * @param product
 */
