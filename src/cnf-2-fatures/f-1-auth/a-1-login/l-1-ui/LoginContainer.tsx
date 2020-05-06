import React, {ChangeEvent, useCallback, useState} from "react";
import Login from "./Login";
import {useDispatch} from "react-redux";
import {signIn} from "../l-2-bll/loginThunk";

const LoginContainer = React.memo(() => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [remember, setRemember] = useState<boolean>(false);

    const setEmailCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value),
        [setEmail]
    );
    const setPassCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setPass(e.currentTarget.value),
        [setPass]
    );
    const setRememberCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setRemember(e.currentTarget.checked),
        [setRemember]
    );

    const dispatch = useDispatch();
    const signInCallback = useCallback(
        () => dispatch(signIn(email, pass, remember)),
        [email, pass, remember, dispatch]
    );

    console.log('render LoginContainer');
    return (
        <Login
            email={email} setEmail={setEmailCallback}
            pass={pass} setPass={setPassCallback}
            remember={remember} setRemember={setRememberCallback}
            signIn={signInCallback}
        />
    );
});

export default LoginContainer;
