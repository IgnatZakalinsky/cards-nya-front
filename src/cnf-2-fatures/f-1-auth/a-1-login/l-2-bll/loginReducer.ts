import {loginInitState, LoginStateType} from "./LoginInitState";

export const loginReducer = (state = loginInitState, action: any): LoginStateType => {
    switch (action.type) {


        default: {
            return state
        }
    }
};
