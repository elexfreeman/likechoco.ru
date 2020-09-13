import AddP from "./AddP.vue";
import ListP from "./ListP.vue";
import EditP from "./EditP.vue";
import { sRoute } from "../../../../Entity/Routes/StorehouseR";

export const route =
    [
        { path: `/${sRoute}`, name: `${sRoute}List`, component: ListP },
        { path: `/${sRoute}/edit/:id`, name: `${sRoute}Edit`, component: EditP },
        { path: `/${sRoute}/add`, name: `${sRoute}Add`, component: AddP },
    ];


