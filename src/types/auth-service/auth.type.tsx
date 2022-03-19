import { PayloadDto } from "../api.types"

export type AuthRequests = SignUpRequest | LoginRequest | ChangePasswordRequest | RefreshTokenRequest | ForgotPasswordRequest | ResetPasswordRequest
export type AuthResponses = UserResponse | LoginResponse | LogoutResponse | TokensResponse

class User{
    user: {
        id: string;
        username: string;
        email: string;
        firstname: string;
        surname: string;
    }
}

class Tokens{
    tokens: {
        tokenType: string
        expiredAt: string
        accessToken: string
        refreshToken: string
        lastSignIn?: Date
    }
}

// Requests
export class SignUpRequest{
    username: string;
    firstname: string
    surname: string
    email: string
    password: string
}

export class ChangePasswordRequest{
    oldPassword: string
    newPassword: string
}

export class LoginRequest{
    email: string
    password: string
}

export class ResetPasswordRequest {
    password: string
    token: string
}

export type ForgotPasswordRequest = Pick<LoginRequest, 'email'>

export class RefreshTokenRequest{
    refreshToken: string
}


// Responses
export class LogoutResponse extends PayloadDto{
    data: {
        user: {}
    }
}

export class LoginResponse extends PayloadDto{
    data: User & Tokens;
}

export class UserResponse extends PayloadDto{
    data: User
}

export class TokensResponse extends PayloadDto{
    data: Tokens
}

