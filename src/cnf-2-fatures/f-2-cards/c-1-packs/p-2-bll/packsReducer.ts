import {PacksInitState, PacksInitStateType} from "./PacksInitState";
import {PacksActionsType} from "./PacksActions";


export const packsReducer =
    (state = PacksInitState, action: PacksActionsType): PacksInitStateType => {
        switch (action.type) {
            case "packs/SET_PACKS": {
                return {
                    ...state,
                    packs: action.packs,
                }
            }

            default: {
                return state
            }
        }
    };
