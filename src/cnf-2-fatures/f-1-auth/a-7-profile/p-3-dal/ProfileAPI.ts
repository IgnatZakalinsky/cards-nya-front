import {instance} from "../../../../cnf-1-main/m-3-dal/instance";

export type SignInDataType = {
    success: boolean;

    error: string;
    token: string;
}

export const ProfileAPI = {
    updateUser: async (token: string, name: string, avatar: string) => {
        const response = await instance.put<SignInDataType>('/auth/me', {token, name, avatar});

        return response.data;
    },

};
