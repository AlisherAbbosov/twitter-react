import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as TokenProvider } from "./Content/Authentication";
import { Provider as ThemeProvider } from "./Content/Theme";
import { Provider as LangProvider } from "./Content/Localization";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <TokenProvider>
          <LangProvider>
            <App />
          </LangProvider>
        </TokenProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
