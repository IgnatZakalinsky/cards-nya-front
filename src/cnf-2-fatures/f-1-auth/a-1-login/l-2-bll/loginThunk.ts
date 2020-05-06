import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType, ExtraArgumentNya, GetAppStoreType, ReturnVoid} from "../../../../cnf-1-main/m-2-bll/store";
import {LoginActions, LoginActionsType} from "./LoginActions";

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

            try {
                const data = {error: 'xxx'};
                    // = await SignInAPI.signIn(email, passwordCoding(password), rememberMe);

                if (data.error) {
                    console.log('Nya, Login Error!', data);
                    dispatch(LoginActions.setError(data.error))

                } else {
                    // setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);

                    // dispatch(nekoSetName(data.name));
                    // signInSuccess(dispatch, true);
                    dispatch(LoginActions.setSuccess(true));

                    console.log('Nya, Login Success!', data)
                }
            } catch (e) {
                dispatch(LoginActions.setError(e.response ? e.response.data.error : e.message));

                console.log('Nya, Login Error!', {...e})
            }
        };
