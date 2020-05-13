export type PackType = {
    _id: string;
    user_id: string;

    name: string;
    path: string;
    grade: number;
    shots: number;

    type: string;
    rating: number;
    more_id: string;

    created: string;
    updated: string;
}

export type PacksStateType = {
    packs: PackType[];
}

export const PacksInitState: PacksStateType = {
    packs: [],
};
