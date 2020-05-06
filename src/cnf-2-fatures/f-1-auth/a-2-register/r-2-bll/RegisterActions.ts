import {InferActionsType} from "../../../../cnf-1-main/m-2-bll/store";

export type RegisterActionsType = InferActionsType<typeof RegisterActions>;

export const RegisterActions = {
    setLoading: (loading: boolean) => ({
        type: 'REGISTER_LOADING',
        loading,
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'REGISTER_SUCCESS',
        success,
    } as const),
    setError: (error: string) => ({
        type: 'REGISTER_ERROR',
        error,
    } as const),

};
