export interface ProductI {
    id?: number;
    caption?: string;
    description?: string;
    img?: string;
    url?: string;
    price?: number;
    isPublished?: boolean;
    bgImg?: string;
}
export declare class ProductE {
    static NAME: string;
    getRulesInsert(): {
        [key: string]: any;
    };
}
