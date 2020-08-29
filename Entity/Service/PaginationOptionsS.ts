import { PaginationOptionsI, PaginationPositionEnum } from "../Interfaces/ListI";

/**
 * Опции для пагинации таблицы
 */
export class PaginationOptionsS implements PaginationOptionsI {

    public enabled: boolean = true;
    public mode: string = "pages";
    public perPage: number = 20;
    public position: PaginationPositionEnum = PaginationPositionEnum.bottom;
    public perPageDropdown: number[] = [20, 50, 100];
    public dropdownAllowAll: boolean = false;
    public setCurrentPage: number = 0;
    public nextLabel: string = "next";
    public prevLabel: string = "prev";
    public rowsPerPageLabel: string = "Rows per page";
    public ofLabel: string = "of";
    public pageLabel: string = "page"; // for 'pages' mod;
    public allLabel: string = "All";

    static InitRus() {
        const out = new PaginationOptionsS();
        out.nextLabel = "далее";
        out.prevLabel = "назад";
        out.rowsPerPageLabel = "Строк на странице";
        out.pageLabel = 'стр.';
        out.ofLabel = 'из';
        out.allLabel = 'Все';
        return out;
    }
}