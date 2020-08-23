import { BaseConfig } from './BaseConfig';

import axios from 'axios';
declare var window: any;
declare var localStorage: any;

import { ApiResponseI } from "../../../../Entity/Interfaces/ApiResponseI";

export const getCookie = (cname: string): string => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * Базовый класс модели
 * Предназанчен для работы с API
 */
export class BaseModel {

    /* URL core-api */
    public apiUrl: string;

    /* URL SP */
    public oldCoreURL: string;


    constructor(config: BaseConfig) {
        this.apiUrl = config.apiUrl;
    }


    fApiHeaders() {
        let apikey = getCookie('apikey');
        return {
            'Content-Type': 'application/json',
            'apikey': apikey,
        };
    };

    /**
     * Запрос к апи без лишнего и с правильным интерфейсом ответа
     * @param body
     * @param url
     */
    public async faApiRequest(body: any, url: string): Promise<ApiResponseI<any>> {
        let resp = null;
        try {
            resp = (
                await axios.post(this.apiUrl + url, body, {
                    headers: this.fApiHeaders()
                })
            ).data;
        } catch (e) {
            resp = e.response.data;
        }
        return resp;
    }

}