export interface OrderI {
    id?: number;
    city?: string;
    delivery_address?: string;
    comment?: string;
    delivery_date?: string;
    delivery_time_comment?: string;
    create_at?: number;
    user_name?: string;
    user_surname?: string;
    user_phone?: string;
}
export declare class OrderE {
    static NAME: string;
    getRulesInsert(): {
        [key: string]: any;
    };
}
