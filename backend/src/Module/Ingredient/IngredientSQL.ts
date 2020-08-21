import BaseSQL from "@a-a-game-studio/aa-core/lib/System/BaseSQL";
import { IngredientE } from "./IngredientE";
import { IngredientI } from "../../../../Entity/Interfaces/IngredientI";
import { SearchS } from "../../../../Entity/Service/SearchS";

/**
 * Ингредиенты 
 */
export class IngredientSQL extends BaseSQL {

    /**
     * Список 
     */
    public async faList(search: SearchS): Promise<IngredientI[]> {
        let ok = true;
        let resp: IngredientI[];

        if (ok) {
            let sql = `SELECT * FROM ${IngredientE.NAME} p LIMIT :nOffset, :nLimit`;

            try {
                resp = (await this.db.raw(sql, search.fGetSearchParam()))[0];
            } catch (e) {
                console.log(e);

                ok = false;
                this.errorSys.errorEx(e, 'Ingredient list', 'Не удалось получить информацию о Ingredient');
            }
        }

        return resp;
    }


    /**
     * Получить IngredientI
     * @param id 
     */
    public async faGetById(id: number): Promise<IngredientI> {
        let ok = true;
        let resp: IngredientI = null;

        if (ok) {
            let sql = `SELECT p.* FROM ${IngredientE.NAME} p
            where p.id=:id`;

            try {
                resp = (await this.db.raw(sql, { id: id }))[0][0];

            } catch (e) {
                ok = false;
                this.errorSys.errorEx(e, 'faGetById', 'Не удалось получить информацию о IngredientI');
            }
        }

        return resp;
    }



    /**
     * Добавить 
     * @param data 
     */
    public async faInsert(data: IngredientI): Promise<number> {
        let resp: number = 0;
        let ingredientE = new IngredientE();

        try {

            // Валидируем входящие данные
            if (!this.modelValidatorSys.fValid(ingredientE.getRulesInsert(), data)) {
                throw 'validation error';
            }

            resp = (await this.db(IngredientE.NAME)
                .insert(this.modelValidatorSys.getResult())
            )[0];


        } catch (e) {
            this.errorSys.errorEx(e, 'faIngredientInsert', 'Не удалось вставить заказ');
        }

        return resp;
    }
}




