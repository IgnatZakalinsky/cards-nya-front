import {AppStoreType} from "./store";

export type ReturnVoid = void;
export type ExtraArgumentNya = {};
export type GetAppStoreType = () => AppStoreType;

export const tryCatch = (logic: () => void, setError: (error: string) => void, info: string) => {
    try {
        logic();

    } catch (e) {
        setError(e.response ? e.response.data.error : e.message);

        console.log('Nya, ' + info + ' Error!', {...e})
    }
};
