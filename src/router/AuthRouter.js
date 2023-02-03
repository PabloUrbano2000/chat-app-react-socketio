import React from "react";
import { LoginPage } from "../pages/LoginPage";

import { Switch, Route } from "react-router-dom";
import { RegisterPage } from "../pages/RegisterPage";

import "../css/login-register.css";

export const AuthRouter = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <Switch>
            <Route exact path="/auth/login" component={LoginPage}></Route>
            <Route exact path="/auth/registro" component={RegisterPage}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};
