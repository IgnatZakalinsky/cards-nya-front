import {instance} from "../../../../cnf-1-main/m-3-dal/instance";

export type DataType = {
    success: boolean;

    token: string;

    error: string;
}

export const PacksAPI = {
    getPacks: async (token: string) => {
        const response = await instance.get<DataType>(`/cards/pack?token=${token}`);

        return response.data;
    },
    addPack: async (token: string) => {
        const response = await instance.post<DataType>(`/cards/pack`, {
            token,
            cardsPack: {}
        });

        return response.data;
    },
    deletePack: async (token: string, id: string) => {
        const response = await instance.delete<DataType>(`/cards/pack?token=${token}&id=${id}`);

        return response.data;
    },

};
