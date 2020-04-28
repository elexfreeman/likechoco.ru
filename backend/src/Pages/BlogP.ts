import * as express from 'express';
import { BlogMainR, BlogPageR } from "./Router"
import { BlogI } from "../Module/Blog/TBlog";
import * as FBlog from "../Module/Blog/FBlog";
import { fGetUrl, fGetIdFromUrl } from "../Module/Lib/UrlGetCyrillic";
import { MainRequest } from '@a-a-game-studio/aa-core/lib/Namespace/System';
import { faResponseStatic } from "@a-a-game-studio/aa-core/lib/System/ResponseSys";
import { TError } from '@a-a-game-studio/aa-core/lib/System/MainRequest';

const router = express.Router();


/**
 * Индексная страница
 */
router.get(BlogMainR.sUrl, faResponseStatic(BlogMainR.sTpl, TError.PageNotFound,
    async (req: MainRequest, res: any, error: any) => {

        const aBlog: BlogI[] = await FBlog.faList();

        req.seo.sTitle = `Блог компании Likechoco`;
        req.seo.sDescription = `Блог компании Likechoco`;

        return {
            aBlog: aBlog,
            fGetUrl: fGetUrl, /* TODO: переделать под хелпер */
        }

    })
);

/**
 * Индексная страница
 */
router.get(BlogMainR.sUrl, faResponseStatic(BlogPageR.sTpl, TError.PageNotFound,
    async (req: MainRequest, res: any, error: any) => {
        const blogId = fGetIdFromUrl(req.params['url']);

        const blog: BlogI = await FBlog.faById(blogId);
    
        req.seo.sTitle = `Likechoco - ${blog.title}`;
        req.seo.sDescription = `Likechoco - ${blog.title}`;
    
        return {
            blog: blog,
            fGetUrl: fGetUrl,
        }
    })
);


export {
    router as BlogController
}
