import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {loginReducer} from "../../cnf-2-fatures/f-1-auth/a-1-login/l-2-bll/loginReducer";
import {registerReducer} from "../../cnf-2-fatures/f-1-auth/a-2-register/r-2-bll/registerReducer";

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

export type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionsType<T extends {[key: string]: (...arg: any[]) => any}> = ReturnType<PropertiesType<T>>

export type ReturnVoid = void;
export type ExtraArgumentNya = {};
export type GetAppStoreType = () => AppStoreType;

// @ts-ignore
window.store = store; // for dev
