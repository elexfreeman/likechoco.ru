export interface ApiResponseI<T> {
    ok: boolean;
    data: T;
    errors: boolean;
    msg: string;
}