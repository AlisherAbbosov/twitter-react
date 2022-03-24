import React from "react";
import { Context } from "../../../Content/Theme";
import searchIcon from "../../Lib/Icons/search.svg";

const Input = () => {
  const { state } = React.useContext(Context);
  return (
    <div className="search">
      <label className="search__label" htmlFor="search-input">
        <img src={searchIcon} alt="search" />
      </label>
      <input
        className={"search__input box__" + state}
        type="text"
        id="search-input"
        placeholder="Search Twitter"
      />
    </div>
  );
};

export default Input;
