import React from "react";
import InputNya from "../../../../cnf-0-common/c-1-ui/input/InputNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";
import {PATH} from "../../../../cnf-1-main/m-1-ui/main/routes/Pages";

const Register = () => {

    console.log('render Register');
    return (
        <div>
            register
            <div><InputNya info={'login'}/></div>
            <div><InputNya info={'pass'}/></div>
            <div><InputNya info={'pass confirm'}/></div>
            <div><ButtonNya info={'sign up'}>sign up</ButtonNya></div>
            <LinkNya to={PATH.LOGIN} info={'login in register'}>login</LinkNya>
        </div>
    );
};

export default Register;
