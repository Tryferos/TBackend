import express from "express"
import { router as userRouter } from '../routes/user';
import { TRequest, TResponse } from "../types";

export const router = express.Router();

const version = process.env.API_VERSION ?? 0;

router.get('/', (req: TRequest, res: TResponse<{api: string}>) => {
    res.json({ api: `v${version}` });
})

router.use('/user', userRouter);
