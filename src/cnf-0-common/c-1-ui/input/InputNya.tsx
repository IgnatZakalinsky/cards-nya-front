import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./InputNya.module.css";

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { info?: string };

const InputNya: React.FC<InputNyaPropsType> = React.memo((
    {
        info,
        ...props
    }
) => {

    info && console.log('render InputNya-' + info);
    return <input className={s.inputNya} {...props}/>;
});

export default InputNya;
