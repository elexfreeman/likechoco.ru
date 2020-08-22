import { BaseModel } from "../Module/Sys/BaseModel";
import { SearchS } from "../../../Entity/Service/SearchS";
import { IngredientI } from "../../../Entity/Interfaces/IngredientI";
export class IngredientModel extends BaseModel {
    async faList(search: SearchS): Promise<IngredientI[]> {
        let resp:IngredientI[] = [];

        return resp;

    }
}