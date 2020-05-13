import {instance} from "../../../../cnf-1-main/m-3-dal/instance";
import {CardType} from "../c-2-bll/CardsInitState";

export type DataType = {
    cards: CardType[];

    success: boolean;

    token: string;

    error: string;
}

export const CardsAPI = {
    getCards: async (token: string, cardsPack_id: string) => {
        const response = await instance.get<DataType>(`/cards/card?token=${token}&cardsPack_id=${cardsPack_id}`);

        return response.data;
    },
    addCard: async (token: string, cardsPack_id: string) => {
        const response = await instance.post<DataType>(`/cards/card`, {
            token,
            card: {
                cardsPack_id,
                question: 'new!',
            },
        });

        return response.data;
    },
    // updatePack: async (token: string, id: string) => {
    //     const response = await instance.put<DataType>(`/cards/pack`, {
    //         token,
    //         cardsPack: {
    //             _id: id,
    //             name: 'update new',
    //         }
    //     });
    //
    //     return response.data;
    // },
    // deletePack: async (token: string, id: string) => {
    //     const response = await instance.delete<DataType>(`/cards/pack?token=${token}&id=${id}`);
    //
    //     return response.data;
    // },

};
