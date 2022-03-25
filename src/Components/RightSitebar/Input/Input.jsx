import React from "react";
import { Context } from "../../../Content/Theme";
import { Context as LangContext } from "../../../Content/Localization";
import searchIcon from "../../Lib/Icons/search.svg";
import languages from "../../../Localization/languages";

const Input = () => {
  const { state } = React.useContext(Context);
  const { lang } = React.useContext(LangContext);
  return (
    <div className="search">
      <label className="search__label" htmlFor="search-input">
        <img src={searchIcon} alt="search" />
      </label>
      <input
        className={"search__input box__" + state}
        type="text"
        id="search-input"
        placeholder={languages[lang].rightSitebar.inputSearch}
      />
    </div>
  );
};

export default Input;
