import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { ProductE } from "./ProductE";
import { ProductCategoryE } from "./ProductCategoryE";
import { ProductI } from "../../../../Entity/Interfaces/ProductI";
import { SearchS } from "../../Service/SearchS";
/**
 * Товары
 */
export class ProductSQL extends BaseSQL {

    /**
     * Список товаров
     */
    public async faList(search: SearchS): Promise<ProductI[]> {
        let ok = true;
        let resp: ProductI[];

        if (ok) {
            let sql = `SELECT * FROM ${ProductE.NAME} p LIMIT :nOffset, :nLimit`;

            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];

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
    public async faGetByUrl(sUrl: string): Promise<ProductI> {
        let ok = true;
        let resp: ProductI = null;

        if (ok) {
            let sql = `SELECT p.* FROM ${ProductE.NAME} p
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
/* export const fProcessBgIg = (product: TProduct.ProductI) => {
    if (product.img) {
        const tmp = product.img.split('.');
        product.bgImg = tmp[0] + '_b.' + tmp[1];
    } else {
        product.bgImg = '';;
    }

    return product
}
 */
