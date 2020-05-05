import React from "react";
import DevHeader from "./dev-header/DevHeader";
import Routes from "./routes/Routes";

// headers, routes, footers
const Main = () => {

    console.log('render Main');
    return (
        <>
            <DevHeader/>

            <Routes/>
        </>
    )
};

export default Main;
