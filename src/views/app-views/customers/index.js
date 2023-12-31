import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Customers = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/profile`} />
      <Route
        path={`${match.url}/setting`}
        component={lazy(() => import(`./setting`))}
      />
      <Route
        path={`${match.url}/user-list`}
        component={lazy(() => import(`./user-list`))}
      />
      <Route
        path={`${match.url}/group-list`}
        component={lazy(() => import(`./group-list`))}
      />
    </Switch>
  </Suspense>
);

export default Customers;
