import {InferActionsType} from "../../../../cnf-1-main/m-2-bll/store";

export type LoginActionsType = InferActionsType<typeof LoginActions>;

export const LoginActions = {
    setLoading: (loading: boolean) => ({
        type: 'LOGIN_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'LOGIN_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'LOGIN_ERROR',
        error,
    } as const),

};
