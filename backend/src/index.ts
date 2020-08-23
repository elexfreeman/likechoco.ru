import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { App } from "@a-a-game-studio/aa-core/lib";
import config from "./Config/MainConfig";
import { MemSysI } from '@a-a-game-studio/aa-redis-sys/lib/CacheSys';
import { ProductCtrl } from "./Module/Product/ProductCtrl";
const mem: MemSysI = {}

class MyApp extends App {
    public fUseProduct(): App {
        console.log('Use product');

        this.objExpress.use(ProductCtrl)
        return this;
    }

    public fUseLoger(): App {
        this.objExpress.use((req, resp, next) => {
            console.log(req.headers.token);
            
            console.log(req.originalUrl);
            next();
        });
        return this;
    }
}

const app: MyApp = new MyApp(config);
app.fDisableCors(); // отключаем cors
app.fUseBodyParser(); // используем дефолтный BodyParser
app.fUseMySql();
app.fUseSharedMem(mem);
app.faUseAuthSys()
app.fUseLoger();
app.fUseProduct();
app.fStart(); // Запускаем приложение
