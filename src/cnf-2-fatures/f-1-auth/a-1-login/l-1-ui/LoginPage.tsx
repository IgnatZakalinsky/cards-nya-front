import React from "react";
import LoginContainer from "./LoginContainer";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";

const LoginPage = () => {

    console.log('render LoginPage');
    return (
        <div>
            login
            <LoginContainer/>
            <LinkNya to={PATH.REGISTER} info={'register in login'}>register</LinkNya>
        </div>
    );
};

export default LoginPage;
