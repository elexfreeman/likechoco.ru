
import * as System from "@a-a-game-studio/aa-core/lib/Namespace/System";
// Системные классы

// Классы SQL Запросов
import { InventoryDocRowSQL } from './InventoryDocRowSQL';

// Роутинг
import { InventoryDocRowR } from '../../../../Entity/Routes/InventoryDocRowR';
import R = InventoryDocRowR

// Валидация
import * as V from './InventoryDocRowV'
import { SearchS } from "../../../../Entity/Service/SearchS";
import { InventoryDocRowI } from "../../../../Entity/Interfaces/InventoryDocRowI";
import { PaginationOptionsS } from "../../../../Entity/Service/PaginationOptionsS";
import { PaginationOptionsI, ColumnI } from "../../../../Entity/Interfaces/ListI";


import * as TableI from "../../../../Entity/Interfaces/TableI";

/**
 * Категории товаров 
 */
export class InventoryDocRowM extends System.BaseM {

    private inventoryDocRowSQL: InventoryDocRowSQL;

    constructor(req: any) {
        super(req);

        this.inventoryDocRowSQL = new InventoryDocRowSQL(req);
    }


    /**
     * Получить по id 
     * @param data 
     */
    public async faGetById(data: R.getById.RequestI): Promise<R.getById.ResponseI> {

        data = <R.getById.RequestI>V.getById(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let item: InventoryDocRowI = null;
        if (ok) {
            item = await this.inventoryDocRowSQL.faGetById(data.id);
        }

        // --------------------------

        let out: R.getById.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                row: item,
            }
        }

        return out;
    }
    // =====================================

    /**
     * Обновленеи 
     * @param data 
     */
    public async faUpdate(data: R.update.RequestI): Promise<R.update.ResponseI> {

        data = <R.update.RequestI>V.update(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let id: number = data.id;
        if (ok) {
            await this.inventoryDocRowSQL.faUpdate(id, data);
        }

        // --------------------------

        let out: R.update.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                id,
            };
        }

        return out;
    }
    // =====================================


    /**
     * Вставка 
     * @param data 
     */
    public async faInsert(data: R.insert.RequestI): Promise<R.insert.ResponseI> {

        data = <R.insert.RequestI>V.insert(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let id: number = null;
        if (ok) {
            id = await this.inventoryDocRowSQL.faInsert(data);
        }

        // --------------------------

        let out: R.insert.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                id,
            };
        }

        return out;
    }
    // =====================================


    /**
     * InventoryDocRow list
     * @param data 
     */
    public async faList(data: R.list.RequestI): Promise<R.list.ResponseI> {

        data = <R.list.RequestI>V.list(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let aList: InventoryDocRowI[] = [];
        let nTotal = 0;
        if (ok) {
            aList = await this.inventoryDocRowSQL.faList(new SearchS().fSetParam(data));
            nTotal = await this.inventoryDocRowSQL.faListTotal(new SearchS().fSetParam(data));
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
                label: 'Дата',
                field: 'date',
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
                sName: 'date',
                sCaption: 'Дата',
                nType: TableI.ColumnTypeEnum.Data,
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



    /**
     * Вставка 
     * @param data 
     */
    public async faInsertARow(data: R.insertRows.RequestI): Promise<R.insert.ResponseI> {

        data = <R.insert.RequestI>V.insert(this.req, data);
        let ok = this.errorSys.isOk();

        // --------------------------

        let id: number = null;
        if (ok) {
            id = await this.inventoryDocRowSQL.faInsert(data);
        }

        // --------------------------

        let out: R.insert.ResponseI = null;
        if (ok) { // Формирование ответа
            out = {
                id,
            };
        }

        return out;
    }
    // =====================================
}
