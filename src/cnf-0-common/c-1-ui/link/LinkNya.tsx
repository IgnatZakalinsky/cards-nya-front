import React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";
import s from "./LinkNya.module.css";

export type LinkNyaPropsType = NavLinkProps & { info?: string };

const LinkNya: React.FC<LinkNyaPropsType> = (
    {
        info,
        ...props
    }
) => {

    info && console.log('render LinkNya-' + info);
    return  <NavLink className={s.link} {...props}/>;
};

export default LinkNya;
