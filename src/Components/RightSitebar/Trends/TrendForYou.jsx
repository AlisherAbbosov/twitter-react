import React from "react";
import Trends from "./Trends";
import SettingsIcon from "../../Lib/Icons/settings.svg";
import { Context } from "../../../Content/Theme";
import { Context as LangContext } from "../../../Content/Localization";
import languages from "../../../Localization/languages";

const TrendForYou = () => {
  const { state } = React.useContext(Context);
  const { lang } = React.useContext(LangContext);
  return (
    <div className={`trends box__` + state}>
      <div className="trends__top">
        <h4 className="trends__top-title">
          {languages[lang].rightSitebar.trendsTitle}
        </h4>
        <a href="#link">
          <img src={SettingsIcon} alt="" />
        </a>
      </div>
      <div className="trends__body">
        <Trends tweets="50.4 " />
        <Trends tweets="50.4 " />
      </div>
    </div>
  );
};

export default TrendForYou;
