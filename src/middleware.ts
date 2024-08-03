import { NextFunction, } from "express";
import rateLimit from "express-rate-limit";
import { ErrorMiddlewareTypeProps, TRequest, TResponse } from "./types";
import { UserModel } from "./database/schema/user";
import { ErrorMiddlewareTypes, USER_TOKEN_HEADER_KEY } from "./constants/ErrorHandling";

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Redis, Memcached, etc. See below.
})

export const authenticateUser = async (req: TRequest, res: TResponse, next: NextFunction) => {
    const tokenId = req.headers[USER_TOKEN_HEADER_KEY] as string;
    if (tokenId == undefined || tokenId == null || tokenId == 'null') {
        res.locals.user = null;
        next();
        return;    
    }
    //todo: retrieve user data
    const user = await UserModel.findOne({uid: tokenId});
    res.locals.user = user;
    next();
}

export const checkAuthentication = (req: TRequest, res: TResponse<ErrorMiddlewareTypeProps>, next: NextFunction) => {
    if (res.locals.user == null) {
        res.status(401).json({ ...ErrorMiddlewareTypes.UNAUTHENTICATED })
    }
    next();
}
