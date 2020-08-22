import * as express from 'express';
import { IndexR as R} from "./Router"
import { TError, MainRequest } from '@a-a-game-studio/aa-core/lib/System/MainRequest';
import { ProductSQL } from '../Module/Product/ProductSQL';
import { faResponseStaticL } from '../Module/Sys/ResponseSys';

const router = express.Router();


export {
    router as IndexController
}
