import React from "react";
import RegisterContainer from "./RegisterContainer";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";

const RegisterPage = () => {

    console.log('render RegisterPage');
    return (
        <div>
            register
            <RegisterContainer/>
            <LinkNya to={PATH.LOGIN} info={'login in register'}>login</LinkNya>
        </div>
    );
};

export default RegisterPage;
