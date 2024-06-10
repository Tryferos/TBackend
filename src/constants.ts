
export const USER_TOKEN_HEADER_KEY = "tokenid";

type ErrorMiddlewareType = {
    [key in keyof typeof ErrorNames]: ErrorMiddlewareTypeProps
}

export type ErrorMiddlewareTypeProps = {
    error: string;
    message: string
}

const ErrorNames = {
    UNAUTHENTICATED: 'UNAUTHENTICATED'
} as const

export const ErrorMiddlewareTypes: ErrorMiddlewareType = Object.freeze(
    {
        [ErrorNames.UNAUTHENTICATED]: {
            error: '401: Unauthenticated',
            message: 'You must be authenticated!'
        },
    }
)