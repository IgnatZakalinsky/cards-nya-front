import {loginInitState, LoginStateType} from "./loginInitState";

export const loginReducer = (state = loginInitState, action: any): LoginStateType => {
    switch (action.type) {


        default: {
            return state
        }
    }
};
