import { ReceiptI } from "./TReceipt";
import { BaseApiI } from "../Sys/BaseApi";
export declare namespace ReceiptR {
    namespace list {
        const route = "/api/receipt/list";
        interface RequestI {
        }
        interface ResponseI extends BaseApiI {
            data: DataI;
        }
        interface DataI {
            list: ReceiptI[];
        }
    }
    namespace getById {
        const route = "/api/receipt/getById";
        interface RequestI {
            id: number;
        }
        interface ResponseI extends BaseApiI {
            data: DataI;
        }
        interface DataI {
            item: ReceiptI;
        }
    }
    namespace getByUrl {
        const route = "/receipt/:url";
        interface RequestI {
            url: string;
        }
        interface ResponseI extends BaseApiI {
            data: DataI;
        }
        interface DataI {
        }
    }
}
