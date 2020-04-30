export interface ReceiptI {
    id?: number;
    caption?: string;
    description?: string;
}
export declare class ReceiptE {
    static NAME: string;
    getRulesInsert(): {
        [key: string]: any;
    };
}
