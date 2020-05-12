import {AppStoreType} from "./store";
import {DEV_VERSION} from "../../config";
import {ProfileActions} from "../../cnf-2-fatures/f-1-auth/a-7-profile/p-2-bll/ProfileActions";

export type ReturnVoid = void;
export type ExtraArgumentNya = {};
export type GetAppStoreType = () => AppStoreType;

export const tryCatch = async (
    dispatch: any,
    logic: () => void,
    setError: (error: string) => void,
    info: string
) => {
    try {
        await logic();

    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
        if (e.response) dispatch(ProfileActions.setToken(e.response.data.token));
        setError(error);

        DEV_VERSION && console.log('Nya, ' + info + ' Error!', {...e})
    }
};
