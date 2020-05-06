import {InferActionsType} from "../../../../cnf-1-main/m-2-bll/store";

export type LoginActionsType = InferActionsType<typeof LoginActions>;

export const LoginActions = {
    setLoginLoading: (loading: boolean) => ({
        type: 'LOGIN_LOADING',
        loading,
    } as const),
    setLoginSuccess: (success: boolean) => ({
        type: 'LOGIN_SUCCESS',
        success,
    } as const),
    setLoginError: (error: string) => ({
        type: 'LOGIN_ERROR',
        error,
    } as const),

};
