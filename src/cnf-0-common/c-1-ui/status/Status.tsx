import React from "react";
import {DEV_VERSION} from "../../../index";

export type StatusPropsType = {
    loading: boolean;
    success: boolean;
    error: string;

    info?: string;
}

const Status: React.FC<StatusPropsType> = React.memo(({loading, success, error, info}) => {

    DEV_VERSION && info && console.log('render Status-' + info);
    return (
        <>
            {loading
                ? <div style={{color: 'orange'}}>loading...</div>
                : error
                    ? <div style={{color: 'red'}}>{error}</div>
                    : success
                        ? <div style={{color: 'lime'}}>Success!</div>
                        : <div><br/></div>
            }
        </>
    )
});

export default Status;
