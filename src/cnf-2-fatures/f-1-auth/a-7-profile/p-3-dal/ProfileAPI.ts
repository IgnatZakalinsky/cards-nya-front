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
    getUsers: async (token: string) => {
        const response = await instance.get<SignInDataType>(`/social/users?token=${token}`);

        return response.data;
    },
    sendGeneralChatMessage: async (token: string) => {
        const response = await instance.post<SignInDataType>('/social/general/message',
            {token, message: 'some message'});

        return response.data;
    },
    getGeneralChatMessages: async (token: string) => {
        const response = await instance.get<SignInDataType>(`/social/general/message?token=${token}`);

        return response.data;
    },

};
