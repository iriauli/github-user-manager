import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";
import ROUTES_CONFIG from "./config/routes";
import NotFound from "../src/page/NotFound";

function Routes() {
  return (
    <Fragment>
      <main></main>
      <section className="content">
        <Switch>
          {ROUTES_CONFIG.map((route) => {
            const Page = route.page;
            const Guard = route.guard;

            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={(props) => (
                  <Guard>
                    <Page {...props} />
                  </Guard>
                )}
              />
            );
          })}
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </section>
    </Fragment>
  );
}

export default Routes;
