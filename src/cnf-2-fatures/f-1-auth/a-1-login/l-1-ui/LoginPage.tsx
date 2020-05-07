import React, {useEffect, useState} from "react";
import LoginContainer from "./LoginContainer";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";
import LoginStatus from "./LoginStatus";
import {DEV_VERSION} from "../../../../config";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../cnf-1-main/m-2-bll/store";
import {Redirect} from "react-router-dom";
import {LoginActions} from "../l-2-bll/LoginActions";

const LoginPage = () => {
    const {success, error} = useSelector((store: AppStoreType) => store.login);
    const [redirect, setRedirect] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);

    const dispatch = useDispatch();
    useEffect(() => {
        if (first && success) dispatch(LoginActions.setSuccess(false));
        if (first && error) dispatch(LoginActions.setError(''));
        if (first) setFirst(false);

        if (success && !first && !redirect) setTimeout(() => setRedirect(true), 500);
    }, [first, success, error, dispatch, setFirst, redirect, setRedirect]);

    DEV_VERSION && console.log('render LoginPage');
    if (redirect && success && !first) return <Redirect to={PATH.PROFILE}/>;
    return (
        <div>
            login
            <LoginStatus first={first}/>
            <LoginContainer/>
            <LinkNya to={PATH.REGISTER} info={'register in login'}>register</LinkNya>
        </div>
    );
};

export default LoginPage;
