import React from "react";
import { Context as LangContext } from "../../../Content/Localization";
import languages from "../../../Localization/languages";

const Trends = ({ tweets }) => {
  const { lang } = React.useContext(LangContext);
  return (
    <div className="trend">
      <div>
        <p className="trend__location">
          {languages[lang].rightSitebar.trendsLocation}
        </p>
        <h5 className="trend__title">
          {languages[lang].rightSitebar.trendTitle}
        </h5>
        <p className="trend__tweets trend__location">
          <span className="trend__tweets-num"> {tweets}</span>
          {languages[lang].rightSitebar.trendTweets}
        </p>
      </div>
    </div>
  );
};

export default Trends;
