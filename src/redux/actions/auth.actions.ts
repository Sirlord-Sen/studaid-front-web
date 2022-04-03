import { Dispatch } from "redux";
import { AuthApiService } from "src/services/api/auth.service";
import { LoginRequest, SignUpRequest } from "src/types/auth-service/auth.type";
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types";

export class AuthAction{
    private authApiService: AuthApiService
    constructor(){
        this.authApiService = new AuthApiService()
    }

    private async simulateRequest(action: any): Promise<void>{
        (dispatch: Dispatch) => {
            setTimeout(() => {
              dispatch(action)
            }, 500)
          }
    }
    
    public async login(data: LoginRequest){
        return this.authApiService.login(data)
            .then((response: any) => {
                this.simulateRequest({
                    type: LOGIN_SUCCESS,
                });
                this.simulateRequest({
                    type: SET_MESSAGE,
                    payload: response.data.message,
                });
                return Promise.resolve();
            })
    } 
}  
//   export const register = (data: SignUpRequest) => (dispatch: Dispatch) => {
//       const authApiService = new AuthApiService()
//     return authApiService.signup(data).then(
//       (response: any) => {
//         dispatch({
//           type: SIGNUP_SUCCESS,
//         });
//         dispatch({
//           type: SET_MESSAGE,
//           payload: response.data.message,
//         });
//         return Promise.resolve();
//       },
//       (error) => {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();
//         dispatch({
//           type: SIGNUP_FAIL,
//         });
//         dispatch({
//           type: SET_MESSAGE,
//           payload: message,
//         });
//         return Promise.reject();
//       }
//     );
//   };
//   export const login = (username, password) => (dispatch) => {
//     return AuthService.login(username, password).then(
//       (data) => {
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: { user: data },
//         });
//         return Promise.resolve();
//       },
//       (error) => {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();
//         dispatch({
//           type: LOGIN_FAIL,
//         });
//         dispatch({
//           type: SET_MESSAGE,
//           payload: message,
//         });
//         return Promise.reject();
//       }
//     );
//   };
//   export const logout = () => (dispatch) => {
//     AuthService.logout();
//     dispatch({
//       type: LOGOUT,
//     });
//   };