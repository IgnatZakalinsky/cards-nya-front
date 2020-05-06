import {RegisterInitState, RegisterStateType} from "./RegisterInitState";
import {RegisterActionsType} from "./RegisterActions";

export const registerReducer =
    (state = RegisterInitState, action: RegisterActionsType): RegisterStateType => {
        switch (action.type) {
            case "REGISTER_ERROR": {
                return {
                    ...state,
                    error: action.error,
                    loading: false,
                    success: false,
                }
            }
            case "REGISTER_LOADING": {
                return {
                    ...state,
                    error: '',
                    loading: action.loading,
                    success: false,
                }
            }
            case "REGISTER_SUCCESS": {
                return {
                    ...state,
                    error: '',
                    loading: false,
                    success: action.success,
                }
            }

            default: {
                return state
            }
        }
    };
