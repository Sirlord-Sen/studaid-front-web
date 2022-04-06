
import { CLEAR, ERROR, SUCCESS } from "src/constants/alert.contants"

export default function (state = {}, action:any) {
    const { type } = action;
    switch (type) {
      case SUCCESS:
        return {
            type: 'alert-success',
            message: action.message
        };
      case ERROR:
        return {
            type: 'alert-danger',
            message: action.message
        };
      case CLEAR:
        return { };
      default:
        return state;
    }
  }