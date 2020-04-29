import * as TBlog from "./TBlog";
export declare const BlogTabel = "blog_page";
/**
 * Список товаров
 */
export declare const faList: () => Promise<TBlog.BlogI[]>;
export declare const faById: (id: number) => Promise<TBlog.BlogI>;
