

import express, { Express, Request, Response } from "express";
import { ErrorNames } from "./constants";

export type TResponse<T = ResponseProps> = Response<T, TUser>;

export type TRequest<B = any> = Request<any, any, B>;

export type ResponseProps = {
    success: boolean;
    error?: string;
}

export type TUser = {
    user: any; 
}

export type ErrorMiddlewareType = {
    [key in keyof typeof ErrorNames]: ErrorMiddlewareTypeProps
}

export type ErrorMiddlewareTypeProps = {
    error: string;
    message: string
}