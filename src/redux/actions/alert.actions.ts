import { 
  SUCCESS, 
  ERROR, 
  CLEAR 
} from "src/constants/alert.contants";

export const setSuccess = (message: string) => ({
  type: SUCCESS,
  message,
});

export const setError = (message: string) => ({
  type: ERROR,
  message,
});

export const clear = () => ({
  type: CLEAR,
});