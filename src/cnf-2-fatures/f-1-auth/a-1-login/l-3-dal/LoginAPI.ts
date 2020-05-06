import {instance} from "../../../../cnf-1-main/m-3-dal/instance";

export type SignInDataType = {
    name: string;
    token: string;
    tokenDeathTime: number;

    error: string;
}

export const LoginAPI = {
    signIn: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<SignInDataType>('/auth/login', {email, password, rememberMe});

        return response.data;
    },

};
