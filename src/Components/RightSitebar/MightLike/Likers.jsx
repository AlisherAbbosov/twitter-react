import UserImg from "../../../Assets/Images/user-img.png";
import Buttons from "../../Buttons/Buttons";
import { Context } from "../../../Content/Theme";
import React from "react";

const Likers = ({ UserFirstName, UserName }) => {
  const { state } = React.useContext(Context);
  return (
    <div className="likers">
      <img className="likers__img" src={UserImg} alt="user img" />
      <div>
        <h4 className="likers__name">{UserFirstName}</h4>
        <p className="likers__username">{UserName}</p>
      </div>
      <div className="likers__btn">
        <Buttons
          text={"Follow"}
          variant={`follow ${state == "dark" ? "dark" : ""}`}
        />
      </div>
    </div>
  );
};

export default Likers;
