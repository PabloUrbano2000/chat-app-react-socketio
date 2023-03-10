import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { ChatPage } from "../pages/ChatPage";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { auth, verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  if (auth.checking) {
    return <h1>Espere por favor</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={auth.logged}
            path="/auth"
            component={AuthRouter}
          ></PublicRoute>
          <PrivateRoute
            isAuthenticated={auth.logged}
            component={ChatPage}
            exact
            path="/"
          ></PrivateRoute>
          <Redirect to="/"></Redirect>
        </Switch>
      </div>
    </Router>
  );
};
