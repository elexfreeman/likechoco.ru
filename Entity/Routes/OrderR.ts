// =======================================================

export namespace OrderR {

    /* Создать заказ */
    export namespace makeOrder {

        export const route = '/order/make_order';


        /** Параметры api запроса */
        export interface RequestI {
            city: string;
            delivery_address: string;
            comment: string;
            delivery_date: string;
            delivery_time_comment: string;
            aProduct: {
                product_id: number;
                count: number;
            }[];
        }

        /** Параметры api ответа */
        export interface ResponseI {
            order_id: number; // заказ
        }

    }
}
