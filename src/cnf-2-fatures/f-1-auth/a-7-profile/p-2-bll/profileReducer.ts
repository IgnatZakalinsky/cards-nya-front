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

            default: {
                return state
            }
        }
    };
