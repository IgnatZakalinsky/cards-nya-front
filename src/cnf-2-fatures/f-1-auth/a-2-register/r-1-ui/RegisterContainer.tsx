import React, {ChangeEvent, useCallback, useState} from "react";
import Register from "./Register";

const RegisterContainer = React.memo(() => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [pass2, setPass2] = useState<string>('');

    const setEmailCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
        [setEmail]
    );
    const setPassCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPass(e.currentTarget.value),
        [setPass]
    );
    const setPassCallback2 = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPass2(e.currentTarget.value),
        [setPass2]
    );

    console.log('render RegisterContainer');
    return (
        <Register
            email={email} setEmail={setEmailCallback}
            pass={pass} setPass={setPassCallback}
            pass2={pass2} setPass2={setPassCallback2}
        />
    );
});

export default RegisterContainer;
