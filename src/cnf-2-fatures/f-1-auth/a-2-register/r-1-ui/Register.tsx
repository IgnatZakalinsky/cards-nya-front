import React, {ChangeEvent} from "react";
import InputNya from "../../../../cnf-0-common/c-1-ui/input/InputNya";
import ButtonNya from "../../../../cnf-0-common/c-1-ui/button/ButtonNya";

type RegisterPropsType = {
    email: string;
    setEmail: (email: ChangeEvent<HTMLInputElement>) => void;
    pass: string;
    setPass: (pass: ChangeEvent<HTMLInputElement>) => void;
    pass2: string;
    setPass2: (pass2: ChangeEvent<HTMLInputElement>) => void;
};

const Register: React.FC<RegisterPropsType> = React.memo((
    {email, setEmail, pass, setPass, pass2, setPass2}
) => {

    console.log('render Register');
    return (
        <>
            <div><InputNya info={'email'} value={email} onChange={setEmail}/></div>
            <div><InputNya info={'pass'} value={pass} onChange={setPass}/></div>
            <div><InputNya info={'pass confirm'} value={pass2} onChange={setPass2}/></div>
            <div><ButtonNya info={'sign up'}>sign up</ButtonNya></div>
        </>
    );
});

export default Register;
