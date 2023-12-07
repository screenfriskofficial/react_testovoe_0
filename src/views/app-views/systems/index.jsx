import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";

const Systems = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/logs`} />
      <Route
        path={`${match.url}/logs`}
        component={lazy(() => import(`./logs`))}
      />
      <Route
        path={`${match.url}/mobile-app`}
        component={lazy(() => import(`./mobile-app`))}
      />
      <Route
        path={`${match.url}/options`}
        component={lazy(() => import(`./options`))}
      />
    </Switch>
  </Suspense>
);

export default Systems;
