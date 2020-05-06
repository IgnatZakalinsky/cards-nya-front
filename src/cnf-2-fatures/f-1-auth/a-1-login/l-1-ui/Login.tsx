import React from "react";
import InputNya from "../../../../cnf-0-common/c-1-ui/input/InputNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";

const Login = () => {

    console.log('render Login');
    return (
        <div>
            login
            <div><InputNya info={'login'}/></div>
            <div><InputNya info={'pass'}/></div>
            <div>forgot? (will be link)</div>
            <div><ButtonNya info={'sign in'}>sign in</ButtonNya></div>
            <LinkNya to={PATH.REGISTER} info={'register in login'}>register</LinkNya>
        </div>
    );
};

export default Login;
