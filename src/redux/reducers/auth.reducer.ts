
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "src/constants/auth.constants";
import { StorageService } from "../../services/storage.service"

const storage = new StorageService()
const user = storage.getUser();
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action:any) {
    const { type, user } = action;
    switch (type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoggingIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user,
        };
      case LOGIN_FAILURE:
        return { };
      default:
        return state;
    }
  }