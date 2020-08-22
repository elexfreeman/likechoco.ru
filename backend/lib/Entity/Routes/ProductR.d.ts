import { ProductI } from "../Interfaces/ProductI";
/**
 * Товар
 */
export declare namespace ProductR {
    /** Начальные данные */
    namespace list {
        /** APIURL */
        const route = "/api/product/list";
        /** Alias действия */
        const action = "list";
        /** Параметры api запроса */
        interface RequestI {
            nLimit: number;
            nOffset: number;
            sSearchString: string;
        }
        /** Параметры api ответа */
        interface ResponseI {
            list: ProductI[];
        }
    }
}
