import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Catalog = ({ match }) => (
    <Suspense fallback={<Loading cover="content"/>}>
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/products`} />
            <Route path={`${match.url}/categories`} component={lazy(() => import(`./categories`))} />
            <Route path={`${match.url}/combos`} component={lazy(() => import(`./combos`))} />
            <Route path={`${match.url}/collections`} component={lazy(() => import(`./collections`))} />
            <Route path={`${match.url}/products`} component={lazy(() => import(`./products`))} />
        </Switch>
    </Suspense>
);

export default Catalog;