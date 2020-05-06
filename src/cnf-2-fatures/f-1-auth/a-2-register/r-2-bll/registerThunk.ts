import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {ExtraArgumentNya, GetAppStoreType, ReturnVoid, tryCatch} from "../../../../cnf-1-main/m-2-bll/thunks";
import {RegisterActions, RegisterActionsType} from "./RegisterActions";
import {RegisterAPI} from "../r-3-dal/RegisterAPI";
import {DEV_VERSION} from "../../../../config";

export const signUp =
    (email: string, password: string, pass2: string)
        : ThunkAction<ReturnVoid, AppStoreType, ExtraArgumentNya, RegisterActionsType> =>
        async (
            dispatch: ThunkDispatch<AppStoreType, ExtraArgumentNya, RegisterActionsType>,
            getStore: GetAppStoreType
        ) => {
            // nekoClear(dispatch);
            // signInLoading(dispatch, true);
            dispatch(RegisterActions.setLoading(true));

            await tryCatch(
                async () => {
                    if (password !== pass2) dispatch(RegisterActions.setError('Passwords don\'t match!'));
                    else {

                        const data = await RegisterAPI.signUp(email, password);

                        if (data.error) {
                            dispatch(RegisterActions.setError(data.error));

                            DEV_VERSION && console.log('Nya, Register Error!', data);

                        } else {
                            // setCookie('token', data.token, Math.floor(data.tokenDeathTime / 1000) - 180);

                            // dispatch(nekoSetName(data.name));
                            // signInSuccess(dispatch, true);
                            dispatch(RegisterActions.setSuccess(true));

                            DEV_VERSION && console.log('Nya, Register Success!', data)
                        }
                    }
                },
                (e) => dispatch(RegisterActions.setError(e)),
                "Register"
            );
        };
