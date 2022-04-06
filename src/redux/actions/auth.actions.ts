import { Dispatch } from "redux";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "src/constants/auth.constants";
import { AuthApiService } from "src/services/api/auth.service";
import { LoginRequest } from "src/types/auth-service/auth.type";
import { setError } from "./alert.actions";

// export class AuthAction{
//     private authApiService: AuthApiService
//     constructor(){
//         this.authApiService = new AuthApiService()
//     }

//     private async simulateRequest(action: any): Promise<void>{
//         (dispatch: Dispatch) => {
//             setTimeout(() => {
//               dispatch(action)
//             }, 500)
//           }
//     }
    
    
// }    

const authApiService = new AuthApiService()

export const login = (data: LoginRequest) => {
    const request = (user: LoginRequest) => { return { type: LOGIN_REQUEST, user } }
    const success = (data: any) => { return { type: LOGIN_SUCCESS, user: data.user } }
    const failure = (error: any) => { return { type: LOGIN_FAILURE, user: error.message } }

    return (dispatch: Dispatch) => {
        dispatch(request(data));

        authApiService.login(data)
            .then((data) => {
                dispatch(success(data))
                // history.pushState('/');
            })
            .catch((err) => {
                dispatch(failure(err))
                dispatch(setError(err.message))
            })
    }
    
}

// export const logout =async (data:type) => {
    
// }