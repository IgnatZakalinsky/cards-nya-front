import {instance} from "../../../../cnf-1-main/m-3-dal/instance";
import {PackType} from "../p-2-bll/PacksInitState";

export type DataType = {
    cardPacks: PackType[];

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
    updatePack: async (token: string, id: string) => {
        const response = await instance.put<DataType>(`/cards/pack`, {
            token,
            cardsPack: {
                _id: id,
                name: 'update new',
            }
        });

        return response.data;
    },
    deletePack: async (token: string, id: string) => {
        const response = await instance.delete<DataType>(`/cards/pack?token=${token}&id=${id}`);

        return response.data;
    },

};
