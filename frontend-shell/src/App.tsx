import * as React from "react";
import { lazy, Suspense } from "react";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

const HomeLazy = lazy(() => import("./pages/MyTripsDetails"));

const history = createBrowserHistory();

export default () => {
  return (
    <Router history={history}>
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path="/" component={HomeLazy} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};
