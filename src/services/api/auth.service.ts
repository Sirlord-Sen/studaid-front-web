import { AUTHBASEURL, USERBASEURL } from "../../constants/auth.api";
import { 
    METHOD, 
    RequestHandlerData, 
    ResponseHandlerTypes, 
    TokenType 
} from "../../types/api.types";
import { 
    UserResponse, 
    LoginRequest, 
    LoginResponse, 
    LogoutResponse, 
    SignUpRequest, 
    ChangePasswordRequest, 
    RefreshTokenRequest, 
    TokensResponse, 
    ForgotPasswordRequest, 
    ResetPasswordRequest, 
} from "../../types/auth-service/auth.type";
import { StorageService } from "../storage.service";

export class AuthApiService{
    private storage: StorageService
    constructor(){
        this.storage = new StorageService()
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
                if(!data.success) throw (data)
                return data.data
            })
            .catch((err:any) => {
                throw err
            })
    }

    public async signup(data:SignUpRequest){
        return await this.requestHandler<UserResponse>({data, method: METHOD.POST, url: `${USERBASEURL}/register`})
    }

    public async currentUser(token: string){
        const user= await this.requestHandler<UserResponse>({token, method: METHOD.GET, url: `${USERBASEURL}/347829340-1238921` })
        this.storage.saveUserData(user)
        return user
    }

    public async updateUser(data: SignUpRequest, token: string){
        const user = await this.requestHandler<UserResponse>({token, data, method: METHOD.PUT, url: USERBASEURL})
        this.storage.saveTokenData(user)
        return user
    }

    public async changePassword(data: ChangePasswordRequest, token: string){
        return await this.requestHandler<UserResponse>({token, data, method: METHOD.PUT, url: `${USERBASEURL}/reset-password`})
    }

    public async login(data: LoginRequest){
        const login = await this.requestHandler<LoginResponse>({data, method: METHOD.POST, url: `${AUTHBASEURL}/login`})
        this.storage.saveUserData(login)
        this.storage.saveTokenData(login)
        return login
    }

    public async logout(token: string){
        return await this.requestHandler<LogoutResponse>({token, method: METHOD.POST, url: `${AUTHBASEURL}/logout` })
    }

    public async refreshToken(data: RefreshTokenRequest){
        const tokenData = await this.requestHandler<TokensResponse>({data, method: METHOD.POST, url: `${AUTHBASEURL}/refresh-token`})
        this.storage.saveTokenData(tokenData)
        return tokenData
    }

    public async forgotPassword(data: ForgotPasswordRequest){
        await this.requestHandler<UserResponse>({data, method: METHOD.POST, url: `${AUTHBASEURL}/forgot-password`})
    }

    public async resetPassword(data: ResetPasswordRequest){
        return await this.requestHandler<UserResponse>({data, method: METHOD.POST, url: `${AUTHBASEURL}/reset-password`})
    }

}