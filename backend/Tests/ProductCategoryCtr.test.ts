declare var global: any;
import * as mocha from 'mocha';
import { assert } from 'chai';
import axios from 'axios';

/* инициализирует фронтовые штуки */
import initMosk from "./mosk";
initMosk();


/* *********************************************** */
/* *********************************************** */
/* *********************************************** */

import { getRandomInt } from "./anyFunctions";
import { ProductCategoryR as R } from "../../Entity/Routes/ProductCategoryR";
import { SearchS } from "../../Entity/Service/SearchS";
import { ApiResponseI } from "../../Entity/Interfaces/ApiResponseI";
import { ProductCategoryI } from '../../Entity/Interfaces/ProductCategoryI';


/* запускатор теста для async-await */
async function run() {

    //++++++++++++++++++++++++++++++++++++
    mocha.it('ProductCategory list', async () => {

        let sUrl = R.list.route;

        let resp: ApiResponseI<R.list.ResponseI> =
            (await axios.post(global['window'].apiUrl + sUrl, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': '12345',
                }
            })).data;

        assert.ok(resp.data.list.length > 0);
    }); //it ****


    mocha.it('ProductCategory insert-get', async () => {

        let sUrl = R.insert.route;
        const data: ProductCategoryI = {
            caption: 'test productCategory',
        }

        let resp: ApiResponseI<R.insert.ResponseI> =
            (await axios.post(global['window'].apiUrl + sUrl, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': '12345',
                }
            })).data;

        assert.ok(resp.data.id > 0);

        const id = resp.data.id;

        sUrl = R.getById.route;
        let respGet: ApiResponseI<R.getById.ResponseI> =
            (await axios.post(global['window'].apiUrl + sUrl, { id: id }, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': '12345',
                }
            })).data;

        assert.ok(respGet.data.id == id);
    }); //it ****


    mocha.it('ProductCategory insert-update-get', async () => {

        let sUrl = R.insert.route;
        const data: ProductCategoryI = {
            caption: 'test productCategory',
        }

        let resp: ApiResponseI<R.insert.ResponseI> =
            (await axios.post(global['window'].apiUrl + sUrl, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': '12345',
                }
            })).data;

        assert.ok(resp.data.id > 0);

        const id = resp.data.id;


        sUrl = R.update.route;
        let newCaption = 'new caption';
        let respUpdate: ApiResponseI<R.update.ResponseI> =
            (await axios.post(global['window'].apiUrl + sUrl, {
                id: id,
                caption: newCaption,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': '12345',
                }
            })).data;



        sUrl = R.getById.route;
        let respGet: ApiResponseI<R.getById.ResponseI> =
            (await axios.post(global['window'].apiUrl + sUrl, { id: id }, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': '12345',
                }
            })).data;

        assert.ok(respGet.data.id == id);
        assert.ok(respGet.data.caption = newCaption);
    }); //it ****


}

run();