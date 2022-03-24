import React from "react";
import Trends from "./Trends";
import SettingsIcon from "../../Lib/Icons/settings.svg";
import { Context } from "../../../Content/Theme";

const TrendForYou = () => {
  const { state } = React.useContext(Context);
  return (
    <div className={`trends box__` + state}>
      <div className="trends__top">
        <h4 className="trends__top-title">Trends for you</h4>
        <a href="#link">
          <img src={SettingsIcon} alt="" />
        </a>
      </div>
      <div className="trends__body">
        <Trends
          trendLovation="Trending in Germany"
          trendTitle="Revolution"
          tweets="50.4K"
        />
        <Trends
          trendLovation="Trending in Germany"
          trendTitle="Revolution"
          tweets="50.4K"
        />
      </div>
    </div>
  );
};

export default TrendForYou;
