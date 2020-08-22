import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { ProductI } from "../../../../Entity/Interfaces/ProductI";
import { SearchS } from "../../../../Entity/Service/SearchS";
/**
 * Продкты
 */
export declare class ProductSQL extends BaseSQL {
    /**
     * Список
     */
    faList(search: SearchS): Promise<ProductI[]>;
    /**
     * Получить ProductI
     * @param id
     */
    faGetById(id: number): Promise<ProductI>;
    /**
     * Добавить
     * @param data
     */
    faInsert(data: ProductI): Promise<number>;
    /**
     * Обновить продукт
     * @param id
     * @param data
     */
    faUpdate(id: number, data: ProductI): Promise<boolean>;
}
