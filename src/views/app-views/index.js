import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}/home`}
          component={lazy(() => import(`./home`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/customers`}
          component={lazy(() => import(`./customers`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/catalog`}
          component={lazy(() => import(`./catalog`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/orders`}
          component={lazy(() => import(`./orders`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/banners`}
          component={lazy(() => import(`./banners`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/promos`}
          component={lazy(() => import(`./promos`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/offline-points`}
          component={lazy(() => import(`./offline-points`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/employees`}
          component={lazy(() => import(`./employees`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/mailings`}
          component={lazy(() => import(`./mailings`))}
        />
        <Route
          path={`${APP_PREFIX_PATH}/systems`}
          component={lazy(() => import(`./systems`))}
        />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
