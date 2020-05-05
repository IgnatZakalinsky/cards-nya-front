import React from "react";
import InputNya from "../../../../cnf-0-common/c-1-ui/input/InputNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";

const Login = () => {

    console.log('render Login');
    return (
        <div>
            login
            <div><InputNya info={'login'}/></div>
            <div><InputNya info={'pass'}/></div>
            <div>forgot?</div>
            <div><ButtonNya info={'sign in'}>sign in</ButtonNya></div>
            <div>register</div>
        </div>
    )
};

export default Login;
