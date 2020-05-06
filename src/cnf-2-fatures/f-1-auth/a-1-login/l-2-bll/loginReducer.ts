import {loginInitState, LoginStateType} from "./LoginInitState";
import {LoginActionsType} from "./LoginActions";

export const loginReducer = (state = loginInitState, action: LoginActionsType): LoginStateType => {
    switch (action.type) {
        case 'LOGIN_ERROR': {
            return {
                ...state,
                error: action.error,
                loading: false,
                success: false,
            }
        }
        case 'LOGIN_LOADING': {
            return {
                ...state,
                error: '',
                loading: action.loading,
                success: false,
            }
        }
        case 'LOGIN_SUCCESS': {
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
