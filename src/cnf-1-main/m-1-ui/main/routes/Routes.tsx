import React from "react";
import {Switch, Route} from "react-router-dom";
import {PageType, pages} from "./Pages";

const mappedRoutes = pages.map((p: PageType) => (
    <Route key={'route-' + p.id} path={p.path} exact={p.exact} render={p.page}/>
));

const Routes = () => {

    console.log('render Routes');
    return (
        <Switch>
            {mappedRoutes}
        </Switch>
    )
};

export default Routes;
