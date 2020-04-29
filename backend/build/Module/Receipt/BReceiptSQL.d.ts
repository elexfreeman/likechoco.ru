import * as T from "./TReceipt";
export declare const RecieptTabel = "receipt";
/**
 * Список
 */
export declare const faList: () => Promise<T.ReceiptI[]>;
/**
 * Получить по id
 * @param id
 */
export declare const faGetById: (id: number) => Promise<T.ReceiptI>;
