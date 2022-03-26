import React from "react";
import { Button } from "@mui/material";
import { Context } from "../../../../Content/Theme";
import languages from "../../../../Localization/languages";
import { Context as TokenContext } from "../../../../Content/Authentication";
import { Context as LangContext } from "../../../../Content/Localization";
import { useNavigate, NavLink } from "react-router-dom";

const ProfileHeader = () => {
  const { state } = React.useContext(Context);
  const { lang } = React.useContext(LangContext);
  const { setToken } = React.useContext(TokenContext);
  const navigate = useNavigate();

  const Logout = () => {
    window.localStorage.removeItem("token");
    setToken("");
  };
  return (
    <div className="profile__header">
      <a onClick={() => navigate(-1)} className="profile__header-back-icon">
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.292893 7.2929C-0.0976311 7.68342 -0.097631 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292893 7.2929ZM21 7L1 7L1 9L21 9L21 7Z"
            fill={`${state === "dark" ? "white" : "black"}`}
          />
        </svg>
      </a>
      <div>
        <h5 className="profile__header-name">Bobur</h5>
        <p className="profile__header-tweets">
          <span className="tweets">1,070</span> Tweets
        </p>
      </div>

      <Button
        onClick={() => Logout()}
        className="profile__header-logout--btn"
        variant="outlined"
      >
        {languages[lang].profilePage.headingLogoutBtn}
      </Button>
      {/* <button className="profile__header-logout--btn">Logout</button> */}
    </div>
  );
};

export default ProfileHeader;
