/**
 * Рецепт
 */
export interface ReceiptI {
    id?: string;
    caption: string;
    description: string;
}
export declare class ReceiptE {
    static NAME: string;
    getRulesInsert(): {
        [key: string]: any;
    };
}
