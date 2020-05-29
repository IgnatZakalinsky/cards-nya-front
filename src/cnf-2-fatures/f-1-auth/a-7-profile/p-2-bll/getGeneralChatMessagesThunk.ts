import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, GetAppStoreType, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {DEV_VERSION} from "../../../../config";
import {ProfileActions, ProfileActionsType} from "./ProfileActions";
import {ProfileAPI} from "../p-3-dal/ProfileAPI";

export const getGeneralChatMessages = (): ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, ProfileActionsType> =>
    async (
        dispatch: ThunkDispatch<AppStoreType, ExtraArgumentNya, ProfileActionsType>,
        getStore: GetAppStoreType
    ) => {
        // nekoClear(dispatch);
        // signInLoading(dispatch, true);
        // dispatch(RegisterActions.setLoading(true));

        const {token} = getStore().profile.user;

        await tryCatch(
            dispatch,
            async () => {

                const data = await ProfileAPI.getGeneralChatMessages(token);

                if (data.error) {
                    // dispatch(RegisterActions.setError(data.error));

                    DEV_VERSION && console.log('Nya, getGeneralChatMessages Error!', data);

                } else {
                    // setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);

                    // dispatch(nekoSetName(data.name));
                    // signInSuccess(dispatch, true);
                    // dispatch(RegisterActions.setSuccess(true));
                    dispatch(ProfileActions.setToken(data.token));

                    DEV_VERSION && console.log('Nya, getGeneralChatMessages Success!', data)
                }

            },
            (e) => {
                // dispatch(RegisterActions.setError(e))
            },
            "getGeneralChatMessages"
        );
    };
