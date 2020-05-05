import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./InputNya.module.css";

export type InputNyaType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    & { info?: string };

const InputNya: React.FC<InputNyaType> = (
    {
        info,
        ...props
    }
) => {

    info && console.log('render InputNya-' + info);
    return <input className={s.inputNya} {...props}/>
};

export default InputNya;
