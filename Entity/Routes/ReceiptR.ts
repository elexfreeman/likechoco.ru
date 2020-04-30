// =======================================================

export namespace ReceiptR {

    export namespace receiptAdd {

        export const route = '/receipt/add';


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
    
    export namespace receiptSave {

        export const route = '/receipt/save';


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
