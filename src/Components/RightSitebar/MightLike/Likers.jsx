import UserImg from "../../../Assets/Images/user-img.png";
import Buttons from "../../Buttons/Buttons";
import { Context } from "../../../Content/Theme";
import { Context as LangContext } from "../../../Content/Localization";
import React from "react";
import languages from "../../../Localization/Languages";

const Likers = ({ UserFirstName, UserName }) => {
  const { state } = React.useContext(Context);
  const { lang } = React.useContext(LangContext);
  return (
    <div className="likers">
      <img className="likers__img" src={UserImg} alt="user img" />
      <div>
        <h4 className="likers__name">{UserFirstName}</h4>
        <p className="likers__username">{UserName}</p>
      </div>
      <div className="likers__btn">
        <Buttons
          text={languages[lang].youMightLike.likeBtn}
          variant={`follow ${state === "dark" ? "dark" : ""}`}
        />
      </div>
    </div>
  );
};

export default Likers;
