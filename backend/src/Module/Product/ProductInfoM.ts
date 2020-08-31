
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
// Системные классы

// Классы SQL Запросов

// Роутинг
import { ProductR } from '../../../../Entity/Routes/ProductR';
import R = ProductR

// Валидация
import * as V from './ProductV'
import { SearchS } from "../../../../Entity/Service/SearchS";
import { ProductI } from "../../../../Entity/Interfaces/ProductI";
import { ProductTagI } from "../../../../Entity/Interfaces/ProductTagI";
import { PaginationOptionsI, ColumnI } from "../../../../Entity/Interfaces/ListI";
import { PaginationOptionsS } from "../../../../Entity/Service/PaginationOptionsS";
import * as TableI from "../../../../Entity/Interfaces/TableI";
/**
 * Товыры
 */
export class ProductInfoM extends System.BaseM {


    constructor(req: any) {
        super(req);
    }


    public async faInfo(data: R.info.RequestI): Promise<R.info.ResponseI> {

        let ok = this.errorSys.isOk();

        // --------------------------
        const sCaption = 'Товар';
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
