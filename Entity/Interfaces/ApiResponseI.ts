export interface ApiResponseI<T> {
    ok: boolean;
    data: T;
    e: boolean;
    msg: string;
}