import express from "express";
import { checkAuthentication } from "../../middleware";
import { TRequest, TResponse } from "../../types";

export const router = express.Router();

router.use(checkAuthentication)

/* 
    * /user
*/

router.get('/', (req: TRequest, res: TResponse) => {
    res.json({success: true,})
})