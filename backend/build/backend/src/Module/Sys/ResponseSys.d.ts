import * as express from 'express';
/**
 * Функция рендера страницы
 * @param faCallback - функция контролера
 * @param tpl - путь к шаблону hbs
 */
export declare const faResponseStaticL: (tpl: string, tError: any, faCallback: Function) => (req: any, res: express.Response, next: any) => Promise<void>;
