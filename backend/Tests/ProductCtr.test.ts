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
import { ProductR as R } from "../../Entity/Routes/ProductR";
import { SearchS } from "../../Entity/Service/SearchS";
import { ApiResponseI } from "../../Entity/Interfaces/ApiResponseI";


/* запускатор теста для async-await */
async function run() {

    //++++++++++++++++++++++++++++++++++++
    mocha.it('Product list', async () => {

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
    mocha.it('Product insert-get', async () => {

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

 
}

run();