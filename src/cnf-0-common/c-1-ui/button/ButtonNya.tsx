import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./ButtonNya.module.css";

export type ButtonNyaType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { info?: string };

const ButtonNya: React.FC<ButtonNyaType> = (
    {
        info,
        ...props
    }
) => {

    info && console.log('render ButtonNya-' + info);
    return <button className={s.buttonNya} {...props}/>
};

export default ButtonNya;
