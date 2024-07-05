import { ErrorMiddlewareType } from "../types";

export const USER_TOKEN_HEADER_KEY = "tokenid";

export const ErrorNames = {
    UNAUTHENTICATED: 'UNAUTHENTICATED',
    UNKNOWN: 'UNKNOWN',
} as const

export const ErrorMiddlewareTypes: ErrorMiddlewareType = Object.freeze(
    {
        [ErrorNames.UNAUTHENTICATED]: {
            error: '401: Unauthenticated',
            message: 'You must be authenticated!'
        },
        [ErrorNames.UNKNOWN]: {
            error: '500: Unknown Error',
            message: 'An error has occured! Please contact with the api administrator if you believe this is an error.'
        },
    }
)