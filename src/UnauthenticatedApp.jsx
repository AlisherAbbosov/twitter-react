import React from "react";
import LoginPage from "./Components/LoginPage/LoginPage";
import { Context as ThemeContext } from "./Content/Theme";

const UnauthenticatedApp = () => {
  const { state } = React.useContext(ThemeContext);
  return (
    <div className={"unauthenticated theme__" + state}>
      <LoginPage />;
    </div>
  );
};

export default UnauthenticatedApp;
