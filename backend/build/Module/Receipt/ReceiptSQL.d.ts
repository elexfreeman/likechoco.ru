import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { ReceiptI } from "./ReceiptE";
export declare class RecieptSQL extends BaseSQL {
    faList(): Promise<ReceiptI[]>;
    /**
    * Получить товар по Url
    * @param sUrl
    */
    faInsert(data: ReceiptI): Promise<number>;
}
