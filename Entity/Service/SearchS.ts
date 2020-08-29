export interface SearchParamI {
    nLimit: number;
    nOffset: number;
    sSearchString: string;
}

/**
 * Класс формирующий поисковый запрос
 */
export class SearchS {
    protected nOffset: number = 0;
    protected nLimit: number = 20;
    protected sSearchString: string = '';

    constructor() {

    }

    fSetOffest(nOffset: number): SearchS {
        this.nOffset = nOffset;
        return this;
    }

    fSetLimit(nLimit: number): SearchS {
        this.nLimit = nLimit;
        return this;
    }

    fSetSearchString(sSearchString: string): SearchS {
        this.sSearchString = sSearchString;
        return this;
    }


    fGetSearchParam(): SearchParamI {
        return {
            nLimit: this.nLimit,
            nOffset: this.nOffset,
            sSearchString: this.sSearchString,
        }
    }

    fSetParam(data: SearchParamI): SearchS {
        this.nLimit = data.nLimit;
        this.nOffset = data.nOffset;
        this.sSearchString = data.sSearchString;
        return this;
    }
}