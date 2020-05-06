import React, {ChangeEvent, useCallback, useState} from "react";
import Login from "./Login";

const LoginContainer = React.memo(() => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const setEmailCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
        [setEmail]
    );
    const setPassCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPass(e.currentTarget.value),
        [setPass]
    );

    console.log('render LoginContainer');
    return (
        <Login
            email={email} setEmail={setEmailCallback}
            pass={pass} setPass={setPassCallback}
        />
    );
});

export default LoginContainer;
