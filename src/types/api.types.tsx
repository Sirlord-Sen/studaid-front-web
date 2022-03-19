import { AuthRequests, AuthResponses } from "./auth-service/auth.type"

export enum METHOD {
    POST='POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export class PayloadDto{
    program: string
    version: string
    release: string
    datetime: Date
    success: boolean
    status: string
    message: string
}

export class RequestHandlerData{
    data?: AuthRequests
    url: string
    method: METHOD
    token?: string
}

export enum TokenType {
    BEARER = 'Bearer'
}

export type ResponseHandlerTypes = AuthResponses