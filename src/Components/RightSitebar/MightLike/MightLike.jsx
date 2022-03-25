import Likers from "./Likers";
import React from "react";
import { Context } from "../../../Content/Theme";
import { Context as LangContext } from "../../../Content/Localization";
import languages from "../../../Localization/languages";

const MightLike = () => {
  const { state } = React.useContext(Context);
  const { lang } = React.useContext(LangContext);
  return (
    <div className={`mightlike box__` + state}>
      <h3 className="mightlike__title">
        {languages[lang].youMightLike.mightTitle}
      </h3>
      <Likers UserFirstName={"Shuhratbek"} UserName={"@mrshukhrat"} />
      <Likers UserFirstName={"Shuhratbek"} UserName={"@mrshukhrat"} />
    </div>
  );
};

export default MightLike;
