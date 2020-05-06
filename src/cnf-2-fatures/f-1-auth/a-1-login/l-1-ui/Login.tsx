import React, {ChangeEvent} from "react";
import InputNya from "../../../../cnf-0-common/c-1-ui/input/InputNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";

type LoginPropsType = {
    email: string;
    setEmail: (email: ChangeEvent<HTMLInputElement>) => void;
    pass: string;
    setPass: (pass: ChangeEvent<HTMLInputElement>) => void;
};

const Login: React.FC<LoginPropsType> = React.memo((
    {email, setEmail, pass, setPass}
) => {

    console.log('render Login');
    return (
        <>
            <div><InputNya info={'email'} value={email} onChange={setEmail}/></div>
            <div><InputNya info={'pass'} value={pass} onChange={setPass}/></div>
            <div>forgot? (will be link)</div>
            <div><ButtonNya info={'sign in'}>sign in</ButtonNya></div>
        </>
    );
});

export default Login;
