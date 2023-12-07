import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const OfflinePoints = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/addresses`} />
      <Route
        path={`${match.url}/addresses`}
        component={lazy(() => import(`./addresses`))}
      />
      <Route
        path={`${match.url}/geo-zones`}
        component={lazy(() => import(`./geo-zones`))}
      />
    </Switch>
  </Suspense>
);

export default OfflinePoints;
