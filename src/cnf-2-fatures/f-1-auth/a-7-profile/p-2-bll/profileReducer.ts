import {ProfileInitState, ProfileStateType} from "./ProfileInitState";
import {ProfileActionsType} from "./ProfileActions";

export const profileReducer =
    (state = ProfileInitState, action: ProfileActionsType): ProfileStateType => {
        switch (action.type) {
            case "profile/SET_USER": {
                return {
                    ...state,
                    user: action.user,
                }
            }
            case "profile/SET_TOKEN": {
                return {
                    ...state,
                    user: {
                        ...state.user,
                        token: action.token,
                    },
                }
            }

            default: {
                return state
            }
        }
    };
