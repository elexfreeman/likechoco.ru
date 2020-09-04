
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
// Системные классы

// Классы SQL Запросов
import { ProductCategorySQL } from './ProductCategorySQL';

// Роутинг
import { ProductCategoryR } from '../../../../Entity/Routes/ProductCategoryR';
import R = ProductCategoryR

// Валидация
import * as V from './ProductCategoryV'
import { SearchS } from "../../../../Entity/Service/SearchS";
import { ProductCategoryI } from "../../../../Entity/Interfaces/ProductCategoryI";
import { PaginationOptionsI, ColumnI } from "../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../Entity/Service/PaginationOptionsS";

/**
 * Товыры
 */
export class ProductCategoryListM extends System.BaseM {

    private productCategorySQL: ProductCategorySQL;

    constructor(req: any) {
        super(req);

        this.productCategorySQL = new ProductCategorySQL(req);
    }

    public async faList(data: R.list.RequestI): Promise<R.list.ResponseI> {

        data = <R.list.RequestI>V.list(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let aList: ProductCategoryI[] = [];
        let nTotal = 0;
        if (ok) {
            aList = await this.productCategorySQL.faList(new SearchS().fSetParam(data));
            nTotal = await this.productCategorySQL.faListTotal(new SearchS().fSetParam(data));
        }

        // --------------------------

        let out: R.list.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                list: aList,
                total: nTotal,
            };
        }

        return out;
    }

    public async faListInfo(data: R.listInfo.RequestI): Promise<R.listInfo.ResponseI> {

        let ok = this.errorSys.isOk();

        // --------------------------

        const paginationOptions: PaginationOptionsI = PaginationOptionsS.InitRus();
        const aColumn: ColumnI[] = [
            {
                label: 'id',
                field: 'id',
            },
            {
                label: 'Название',
                field: 'caption',
            },
            {
                label: 'Описание',
                field: 'description',
            },
        ];


        // --------------------------

        let out: R.listInfo.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                paginationOptions: paginationOptions,
                aColumn: aColumn,
            };
        }

        return out;
    }

}
