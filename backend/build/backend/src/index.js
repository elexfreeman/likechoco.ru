"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require('path');
const middleware = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/Middleware"));
const controller = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/Controller"));
const MainConfig_1 = require("./Config/MainConfig");
const IndexP_1 = require("./Pages/IndexP");
const CartP_1 = require("./Pages/CartP");
const SeoMiddleware_1 = __importDefault(require("@a-a-game-studio/aa-core/lib/Middleware/SeoMiddleware"));
const ProductP_1 = require("./Pages/ProductP");
const app = express_1.default();
// =========================
// Базовая конфигурация expressa
// =========================
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
const cors = require('cors');
/*для подкл к API*/
app.use(cors());
app.options('*', cors());
// Инициализация конфига
app.use(function InitConfigMiddleware(req, res, next) {
    req.conf = MainConfig_1.conf;
    next();
});
// =========================
// Подключение middleware
// =========================
/* Инициализация базовых систем */
app.use(middleware.InitBaseSysMiddleware);
app.use((req, res, next) => {
    next();
});
/** Конфигурирование приложения */
app.use(middleware.ConfigMiddleware);
// кэш
const sharedMem = {};
app.use(middleware.SharedMemMiddleware(sharedMem));
// база
app.use(middleware.MySqlMiddleware);
/** Инициализация подсистем */
app.use(middleware.InitSubSysMiddleware);
/* запрос */
app.use(middleware.RequestSysMiddleware);
/* ответ */
app.use(middleware.ResponseSysMiddleware);
app.use(SeoMiddleware_1.default);
app.use(express_1.default.static('./public'));
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');
/* проверка авторизации на уровне приложения */
app.use(middleware.AuthSysMiddleware);
// =========================
// Подключение контроллеров
// =========================
// Модуль для пользователей
// app.use(controller.UserController.router);
// Модуль для login
app.use(controller.LoginCtrl.router);
app.use(IndexP_1.IndexController); // главная
app.use(CartP_1.CartController); // корзина
app.use(ProductP_1.ProductCtrl); // корзина
console.log('server start at http://localhost:' + MainConfig_1.conf.common.port);
app.listen(MainConfig_1.conf.common.port);
//# sourceMappingURL=index.js.map