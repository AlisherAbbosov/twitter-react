import React from "react";

const Context = React.createContext();

const Provider = ({ children }) => {
  const [lang, setLang] = React.useState(
    window.localStorage.getItem("lang") || "en"
  );

  React.useEffect(() => {
    if (lang) {
      window.localStorage.setItem("lang", lang);
    } else {
      window.localStorage.removeItem("lang");
    }
  });
  return (
    <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>
  );
};
export { Context, Provider };
