import { AUTHBASEURL, USERBASEURL } from "../../constants/auth.api";
import { METHOD, RequestHandlerData, ResponseHandlerTypes, TokenType } from "../../types/api.types";
import { UserResponse, LoginRequest, LoginResponse, LogoutResponse, SignUpRequest, ChangePasswordRequest, RefreshTokenRequest, TokensResponse, ForgotPasswordRequest, ResetPasswordRequest } from "../../types/auth-service/auth.type";

export class AuthService{
    private signupUrl: string;
    private currentUserUrl: string;
    private updateUserUrl: string;
    private changePasswordUrl: string;
    private loginUrl: string;
    private resetPasswordUrl: string;
    private forgotPasswordUrl: string;
    private logoutUrl: string;
    private refreshTokenUrl: string;
    constructor(){
        this.signupUrl = `${USERBASEURL}/register`
        this.currentUserUrl = `${USERBASEURL}/347829340-1238921`
        this.updateUserUrl = `${USERBASEURL}/`
        this.changePasswordUrl = `${USERBASEURL}/`
        this.loginUrl = `${AUTHBASEURL}/login`
        this.logoutUrl = `${AUTHBASEURL}/logout`
        this.refreshTokenUrl = `${AUTHBASEURL}/refresh-token`
        this.forgotPasswordUrl = `${AUTHBASEURL}/forgot-password`
        this.resetPasswordUrl = `${AUTHBASEURL}/reset-password`
    }

    private async requestHandler<T extends ResponseHandlerTypes>(request: RequestHandlerData){
        const { data, url, method } = request
        const response = await fetch(url, {
            body: JSON.stringify(data),
            method: method,
            headers: {
                'Content-type': 'Application/json',
                'Authorization': request.token ? `${TokenType.BEARER} ${request.token}`: ''
            }
        })
        return response.json()
            .then((data: T) => {
                if(!data.success) throw new Error(data.message)
                console.log(data.message)
                return data.data
            })
            .catch((err:any) => {
                throw err
            })
    }

    public async signup(data:SignUpRequest){
        return await this.requestHandler<UserResponse>({data, method: METHOD.POST, url: this.signupUrl})
    }

    public async currentUser(token: string){
        return await this.requestHandler<UserResponse>({token, method: METHOD.GET, url: this.currentUserUrl })
    }

    public async updateUser(data: SignUpRequest, token: string){
        return await this.requestHandler<UserResponse>({token, data, method: METHOD.PUT, url: this.updateUserUrl})
    }

    public async changePassword(data: ChangePasswordRequest, token: string){
        return await this.requestHandler<UserResponse>({token, data, method: METHOD.PUT, url: this.changePasswordUrl})
    }

    public async login(data: LoginRequest){
        return await this.requestHandler<LoginResponse>({data, method: METHOD.POST, url: this.loginUrl})
    }

    public async logout(token: string){
        return await this.requestHandler<LogoutResponse>({token, method: METHOD.POST, url: this.logoutUrl })
    }

    public async refreshToken(data: RefreshTokenRequest){
        return await this.requestHandler<TokensResponse>({data, method: METHOD.POST, url: this.refreshTokenUrl})
    }

    public async forgotPassword(data: ForgotPasswordRequest){
        return await this.requestHandler<UserResponse>({data, method: METHOD.POST, url: this.forgotPasswordUrl})
    }

    public async resetPassword(data: ResetPasswordRequest){
        return await this.requestHandler<UserResponse>({data, method: METHOD.POST, url: this.resetPasswordUrl})
    }

}