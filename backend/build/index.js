"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/Middleware"));
const controller = __importStar(require("@a-a-game-studio/aa-core/lib/Namespace/Controller"));
const MainConfig_1 = require("./Config/MainConfig");
const IndexP_1 = require("./Pages/IndexP");
const CartP_1 = require("./Pages/CartP");
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
console.log('server start at http://localhost:' + MainConfig_1.conf.common.port);
app.listen(MainConfig_1.conf.common.port);
//# sourceMappingURL=index.js.map