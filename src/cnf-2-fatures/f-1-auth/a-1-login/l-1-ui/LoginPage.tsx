import React from "react";
import LoginContainer from "./LoginContainer";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";
import LoginStatus from "./LoginStatus";
import {DEV_VERSION} from "../../../../config";

const LoginPage = () => {

    DEV_VERSION && console.log('render LoginPage');
    return (
        <div>
            login
            <LoginStatus/>
            <LoginContainer/>
            <LinkNya to={PATH.REGISTER} info={'register in login'}>register</LinkNya>
        </div>
    );
};

export default LoginPage;
