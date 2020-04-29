"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const Router_1 = require("./Router");
const FBlog = __importStar(require("../Module/Blog/FBlog"));
const UrlGetCyrillic_1 = require("../Module/Lib/UrlGetCyrillic");
const ResponseSys_1 = require("@a-a-game-studio/aa-core/lib/System/ResponseSys");
const MainRequest_1 = require("@a-a-game-studio/aa-core/lib/System/MainRequest");
const router = express.Router();
exports.BlogController = router;
/**
 * Индексная страница
 */
router.get(Router_1.BlogMainR.sUrl, ResponseSys_1.faResponseStatic(Router_1.BlogMainR.sTpl, MainRequest_1.TError.PageNotFound, async (req, res, error) => {
    const aBlog = await FBlog.faList();
    req.seo.sTitle = `Блог компании Likechoco`;
    req.seo.sDescription = `Блог компании Likechoco`;
    return {
        aBlog: aBlog,
        fGetUrl: UrlGetCyrillic_1.fGetUrl,
    };
}));
/**
 * Индексная страница
 */
router.get(Router_1.BlogMainR.sUrl, ResponseSys_1.faResponseStatic(Router_1.BlogPageR.sTpl, MainRequest_1.TError.PageNotFound, async (req, res, error) => {
    const blogId = UrlGetCyrillic_1.fGetIdFromUrl(req.params['url']);
    const blog = await FBlog.faById(blogId);
    req.seo.sTitle = `Likechoco - ${blog.title}`;
    req.seo.sDescription = `Likechoco - ${blog.title}`;
    return {
        blog: blog,
        fGetUrl: UrlGetCyrillic_1.fGetUrl,
    };
}));
//# sourceMappingURL=BlogP.js.map