
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
// Системные классы

// Классы SQL Запросов

// Роутинг
import { ProductCategoryR } from '../../../../Entity/Routes/ProductCategoryR';
import R = ProductCategoryR

// Валидация
import * as V from './ProductCategoryV'
import { SearchS } from "../../../../Entity/Service/SearchS";
import { ProductCategoryI } from "../../../../Entity/Interfaces/ProductCategoryI";
import { PaginationOptionsI, ColumnI } from "../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../Entity/Service/PaginationOptionsS";
import * as TableI from "../../../../Entity/Interfaces/TableI";
/**
 * Товыры
 */
export class ProductCategoryInfoM extends System.BaseM {


    constructor(req: any) {
        super(req);
    }


    public async faInfo(data: R.info.RequestI): Promise<R.info.ResponseI> {

        let ok = this.errorSys.isOk();

        // --------------------------
        const sCaption = 'Категория товара';
        const aColumn: TableI.ColumnI[] = [
            {
                sName: 'id',
                sCaption: 'Id',
                nType: TableI.ColumnTypeEnum.Integer,
                bPrimaryKey: true,
            },
            {
                sName: 'caption',
                sCaption: 'Название',
                nType: TableI.ColumnTypeEnum.String,
                bPrimaryKey: false,
            },
            {
                sName: 'description',
                sCaption: 'Описание',
                nType: TableI.ColumnTypeEnum.Text,
                bPrimaryKey: false,
            },
        ];

        // --------------------------

        let out: R.info.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                sCaption: sCaption,
                aColumn: aColumn,
            };
        }

        return out;
    }

}