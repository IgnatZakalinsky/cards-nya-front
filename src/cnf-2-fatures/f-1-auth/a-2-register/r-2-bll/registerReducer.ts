import {RegisterInitState, RegisterStateType} from "./RegisterInitState";

export const registerReducer = (state = RegisterInitState, action: any): RegisterStateType => {
    switch (action.type) {


        default: {
            return state
        }
    }
};
