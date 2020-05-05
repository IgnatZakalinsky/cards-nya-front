import React from "react";
import {NavLink} from "react-router-dom";
import {pages} from "../routes/Pages";
import s from "./DevHeader.module.css";

const mappedLinks = pages.map(p => (
    <NavLink key={'link-' + p.id} to={p.path || ''} className={s.link}>{p.title}</NavLink>
));

const DevHeader = () => {

    console.log('render DevHeader');
    return (
        <>
            {mappedLinks}
            
            <NavLink to={'/profile/1'}>profile-1</NavLink>
        </>
    )
};

export default DevHeader;
