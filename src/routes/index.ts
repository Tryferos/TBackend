import express from "express"
import { router as UserRoute } from '../routes/user';
import { router as FoodsRouter } from '../routes/foods';
import { TRequest, TResponse } from "../types";
import { ROUTES } from "../constants/Routes";

export const router = express.Router();

const version = process.env.API_VERSION ?? 0;

router.get(ROUTES.INDEX, (req: TRequest, res: TResponse<{api: string}>) => {
    res.json({ api: `v${version}` });
});

router.use(ROUTES.USER, UserRoute);

router.use(ROUTES.FOODS, FoodsRouter);
