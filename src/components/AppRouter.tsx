import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        isAuth
        ?
        <Switch>
            {privateRoutes.map(route =>
                <Route {...route} key={route.path} />
            )}
            <Redirect to={RouteNames.EVENT}/>
        </Switch>
        :
        <Switch>
            {publicRoutes.map(route =>
                <Route {...route} key={route.path} />
            )}
            <Redirect to={RouteNames.LOGIN} />
        </Switch>
    );
};

export default AppRouter;