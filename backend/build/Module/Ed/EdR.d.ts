import { EdI } from "./TEd";
import { BaseApiI } from "../Sys/BaseApi";
export declare namespace EdR {
    namespace list {
        const route = "/api/ed/list";
        interface RequestI {
        }
        interface ResponseI extends BaseApiI {
            data: DataI;
        }
        interface DataI {
            list: EdI[];
        }
    }
}
