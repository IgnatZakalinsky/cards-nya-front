import React from "react";
import {pages} from "../routes/Pages";
import LinkNya from "../../../../cnf-0-common/c-1-ui/link/LinkNya";

const mappedLinks = pages.map(p => (
    <LinkNya
        key={'navLink-' + p.id}
        to={(p.path || '') + (p.params ? '/1' : '')}
        info={'navLink-' + p.id}
    >
        {p.title}
    </LinkNya>
));

const DevHeader = () => {

    console.log('render DevHeader');
    return (
        <>
            {mappedLinks}
        </>
    );
};

export default DevHeader;
