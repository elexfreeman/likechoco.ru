import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { ReceiptE } from "./RecieptE";
import { ReceiptI } from "../../../../Entity/Interfaces/RecieptI";

/**
 * Товары
 */
export class ReceiptSQL extends BaseSQL {

    /**
     * Список товаров
     */
    public async faList(): Promise<ReceiptI[]> {
        let ok = true;
        let resp: ReceiptI[];

        if (ok) {
            let sql = `SELECT * FROM ${ReceiptE.NAME} p`;

            try {
                resp = (await this.db.raw(sql, {}))[0];

            } catch (e) {
                console.log(e);

                ok = false;
                this.errorSys.errorEx(e, 'product list', 'Не удалось получить информацию о товарах');
            }
        }

        return resp;
    }

    /**
     * Получить товар по Url
     * @param sUrl 
     */
    public async faGetByUrl(sUrl: string): Promise<ReceiptI> {
        let ok = true;
        let resp: ReceiptI = null;

        if (ok) {
            let sql = `SELECT p.* FROM ${ReceiptE.NAME} p
            where p.url=:sUrl`;

            try {
                resp = (await this.db.raw(sql, { sUrl: sUrl }))[0][0];

            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetByUrl', 'Не удалось получить информацию о товаре');
            }
        }

        return resp;
    }
}



/**
 * обработка BgImg
 * @param product
 */
/* export const fProcessBgIg = (product: TReceipt.ReceiptI) => {
    if (product.img) {
        const tmp = product.img.split('.');
        product.bgImg = tmp[0] + '_b.' + tmp[1];
    } else {
        product.bgImg = '';;
    }

    return product
}
 */
