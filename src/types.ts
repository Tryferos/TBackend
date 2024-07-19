

import express, { Express, Request, Response } from "express";
import { User } from "./database/schema/user";
import { ErrorNames } from "./constants/ErrorHandling";

export type TResponse<T = ResponseProps> = Response<T, TUser>;

export type TRequest<B = any, Q = any, P = any> = Request<P, any, B, Q>;

export type ResponseProps = {
    success: boolean;
    error?: string;
}

export type TUser = {
    user: User | null; 
}

export type ErrorMiddlewareType = {
    [key in keyof typeof ErrorNames]: ErrorMiddlewareTypeProps
}

export type ErrorMiddlewareTypeProps = {
    error: string;
    message: string
}