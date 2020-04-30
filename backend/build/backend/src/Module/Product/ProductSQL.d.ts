import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { ProductI } from "../../../../Entity/Interfaces/ProductI";
/**
 * Товары
 */
export declare class ProductSQL extends BaseSQL {
    /**
     * Список товаров
     */
    faList(): Promise<ProductI[]>;
    /**
     * Получить товар по Url
     * @param sUrl
     */
    faGetByUrl(sUrl: string): Promise<ProductI>;
}
/**
 * обработка BgImg
 * @param product
 */
