import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

import Game from './views/Game';

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/game" />
  },
  {
    path: "/game",
    layout: DefaultLayout,
    component: Game
  }
];
