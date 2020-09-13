import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
import { App } from "@a-a-game-studio/aa-core/lib";
import config from "./Config/MainConfig";
import { MemSysI } from '@a-a-game-studio/aa-redis-sys/lib/CacheSys';
import { ProductCtrl } from "./Module/Product/ProductCtrl";
import { ProductTagCtrl } from "./Module/ProductTag/ProductTagCtrl";
import { ProductCategoryCtrl } from "./Module/ProductCategory/ProductCategoryCtrl";
import { ProductVarCtrl } from "./Module/ProductVar/ProductVarCtrl";
import { ProductCategoryVarCtrl } from "./Module/ProductCategoryVar/ProductCategoryVarCtrl";
import { ClientCtrl } from "./Module/Client/ClientCtrl";
import { StorehouseCtrl } from "./Module/Storehouse/StorehouseCtrl";


const mem: MemSysI = {}

class MyApp extends App {

    public fUseProduct(): App {
        console.log('+ Use product');
        this.objExpress.use(ProductCtrl)
        return this;
    }
    public fUseProductTag(): App {
        console.log('+ Use product tag');
        this.objExpress.use(ProductTagCtrl)
        return this;
    }
    public fUseProductCategory(): App {
        console.log('+ Use product category');
        this.objExpress.use(ProductCategoryCtrl)
        return this;
    }
    public fUseProductVar(): App {
        console.log('+ Use product var');
        this.objExpress.use(ProductVarCtrl)
        return this;
    }
    public fUseProductCategoryVar(): App {
        console.log('+ Use product category var');
        this.objExpress.use(ProductCategoryVarCtrl)
        return this;
    }
    public fUseClient(): App {
        console.log('+ Use client');
        this.objExpress.use(ClientCtrl)
        return this;
    }
    public fUseStorehouse(): App {
        console.log('+ Use storehouse');
        this.objExpress.use(StorehouseCtrl)
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
app.fUseReddis();
app.faUseAuthSys();
app.fUseLoger();

app.fUseProduct();
app.fUseProductTag();
app.fUseProductCategory();
app.fUseProductVar();
app.fUseProductCategoryVar();
app.fUseClient();
app.fUseStorehouse();

app.fStart(); // Запускаем приложение
