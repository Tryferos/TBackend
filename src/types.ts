

import express, { Express, Request, Response } from "express";

export type TResponse<T = ResponseProps> = Response<T, TUser>;

export type TRequest<B = any> = Request<any, any, B>;

export type ResponseProps = {
    success: boolean;
    error?: string;
}

export type TUser = {
    user: any; 
}