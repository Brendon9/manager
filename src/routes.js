import React from "react";
import { render } from "react-dom";
import { browserHistory, Router, Route, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import requireAuth from "./containers/Require_auth";
import App from "./App";
import Login from "./containers/Login/Login";
import Register from "./containers/Login/Register";
import Forgot from "./containers/Login/Forgot";
import Logout from "./containers/Login/Logout";
import System from "./containers/System/System";
import Survivor from "./containers/Survivor/Survivor";
import Survivors from "./containers/Survivors/Survivors";
import SurvivorsCreate from "./containers/Survivors/SurvivorsCreate";
import Settlements from "./containers/Settlements/Settlements";
import SettlementsCreate from "./containers/Settlements/SettlementsCreate";
import Storage from "./containers/Storage/Storage";
import Resources from "./containers/Storage/Resources";
import Gear from "./containers/Storage/Gear";
import Log from "./containers/Log/Log";
import Settlement from "./containers/Settlement/Settlement";
import More from "./containers/More/More";
import Aya from "./containers/Aya/Aya";
import NotFound from "./components/NotFound/NotFound";
import { AUTH_USER } from "./actions/types";

require("../styles/main.scss");

render(
  <Provider store={store}>

  </Provider>,
  document.getElementById("app")
);
