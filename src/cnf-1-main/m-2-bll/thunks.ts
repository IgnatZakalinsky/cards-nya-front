import {AppStoreType} from "./store";
import {DEV_VERSION} from "../../config";

export type ReturnVoid = void;
export type ExtraArgumentNya = {};
export type GetAppStoreType = () => AppStoreType;

export const tryCatch = async (logic: () => void, setError: (error: string) => void, info: string) => {
    try {
        await logic();

    } catch (e) {
        setError(e.response ? e.response.data.error : (e.message + ', more details in the console'));

        DEV_VERSION && console.log('Nya, ' + info + ' Error!', {...e})
    }
};
