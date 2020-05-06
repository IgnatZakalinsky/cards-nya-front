import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {LoginActions, LoginActionsType} from "./LoginActions";
import {ExtraArgumentNya, GetAppStoreType, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {LoginAPI} from "../l-3-dal/LoginAPI";
import {DEV_VERSION} from "../../../../index";

export const signIn =
    (email: string, password: string, rememberMe: boolean)
        : ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, LoginActionsType> =>
        async (
            dispatch: ThunkDispatch<AppStoreType, ExtraArgumentNya, LoginActionsType>,
            getStore: GetAppStoreType
        ) => {
            // nekoClear(dispatch);
            // signInLoading(dispatch, true);
            dispatch(LoginActions.setLoading(true));

            await tryCatch(
                async () => {
                    const data = await LoginAPI.signIn(email, password, rememberMe);

                    if (data.error) {
                        dispatch(LoginActions.setError(data.error));

                        DEV_VERSION && console.log('Nya, Login Error!', data);

                    } else {
                        // setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);

                        // dispatch(nekoSetName(data.name));
                        // signInSuccess(dispatch, true);
                        dispatch(LoginActions.setSuccess(true));

                        DEV_VERSION && console.log('Nya, Login Success!', data)
                    }
                },
                (e) => dispatch(LoginActions.setError(e)),
                "Login"
            );
        };
