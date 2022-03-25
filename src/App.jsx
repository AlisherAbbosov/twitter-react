import React from "react";
import "./App.scss";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

import { Context } from "./Content/Authentication";

function App() {
  const { token } = React.useContext(Context);

  if (token) {
    return <AuthenticatedApp />;
  } else {
    return <UnauthenticatedApp />;
  }
}

export default App;
