import InfoImg from "../../../../Assets/Images/profile.jpg";
import UserImgBig from "../../../../Assets/Images/user-img-big.png";
import { Context as LangContext } from "../../../../Content/Localization";
import React from "react";
import { Context } from "../../../../Content/Theme";

import { Routes, Route, NavLink } from "react-router-dom";
import Tweets from "../Tweets/Tweets";
import languages from "../../../../Localization/languages";

const ProfileInfo = () => {
  const { state } = React.useContext(Context);
  const { lang } = React.useContext(LangContext);
  return (
    <div className="profile__info">
      <img className="profile__info-top-img" src={InfoImg} alt="info" />
      <div className="profile__info-top">
        <img
          className="profile__info-user-img"
          src={UserImgBig}
          alt="user-img"
        />
        <div className="profile__info-texts">
          <h5 className="profile__info-name">Bobur</h5>

          <p className="profile__info-username">@bobur_mavlonov</p>

          <p className="profile__info-about">
            UX&UI designer at <a href="#link">@abutechuz</a>
          </p>
        </div>
        <ul className="profile__info-list">
          <li className="profile__info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g fill={`${state === "dark" ? "#FFFF" : "#000"}`} opacity="0.6">
                <path d="M12 14.315a3.79 3.79 0 01-3.787-3.786c0-2.088 1.7-3.789 3.787-3.789 2.087 0 3.787 1.7 3.787 3.787 0 2.087-1.7 3.785-3.787 3.785v.003zm0-6.073a2.29 2.29 0 00-2.287 2.287A2.289 2.289 0 0012 12.814a2.29 2.29 0 002.287-2.286A2.291 2.291 0 0012 8.24v.002z"></path>
                <path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69a8.62 8.62 0 001.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912a.743.743 0 00.93.001c.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002a8.62 8.62 0 001.742-5.223v-.002zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285a7.12 7.12 0 01-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5c3.965 0 7.192 3.226 7.192 7.19 0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285v.002z"></path>
              </g>
            </svg>
            <a href="#link">Mashag’daman</a>
          </li>

          <li className="profile__info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g fill={`${state === "dark" ? "#FFFF" : "#000"}`} opacity="0.6">
                <path d="M11.96 14.945a.833.833 0 01-.203-.027 5.192 5.192 0 01-2.795-1.932 5.205 5.205 0 01-.968-3.893 5.21 5.21 0 012.068-3.438l3.53-2.608a5.25 5.25 0 017.33 1.1 5.22 5.22 0 01.967 3.895 5.209 5.209 0 01-2.07 3.438l-1.48 1.094a.752.752 0 01-.892-1.208l1.48-1.095a3.713 3.713 0 001.476-2.45 3.724 3.724 0 00-.69-2.778 3.745 3.745 0 00-5.23-.784l-3.53 2.608a3.72 3.72 0 00-1.475 2.45c-.15.99.097 1.975.69 2.778a3.701 3.701 0 001.992 1.377.752.752 0 01-.202 1.475l.002-.002z"></path>
                <path d="M7.27 22.054a5.24 5.24 0 01-5.193-6.019 5.21 5.21 0 012.07-3.438l1.478-1.094a.752.752 0 01.893 1.208l-1.48 1.095a3.716 3.716 0 00-1.475 2.45c-.148.99.097 1.975.69 2.778a3.745 3.745 0 005.23.785l3.528-2.608a3.744 3.744 0 00.785-5.23 3.7 3.7 0 00-1.992-1.376.75.75 0 01-.52-.927c.112-.4.528-.63.926-.522a5.19 5.19 0 012.794 1.932 5.248 5.248 0 01-1.1 7.33l-3.53 2.608a5.189 5.189 0 01-3.105 1.026l.001.002z"></path>
              </g>
            </svg>
            <a href="https://t.me/boburjon_mavlonov">t.me/boburjon_mavlonov</a>
          </li>

          <li className="profile__info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                d="M7.75 11.083a.75.75 0 01-.75-.75C7 7.393 9.243 5 12 5a.75.75 0 010 1.5c-1.93 0-3.5 1.72-3.5 3.833a.75.75 0 01-.75.75z"
              ></path>
              <path
                fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83a.496.496 0 00-.093.54c.08.182.26.3.46.3h4.957a.499.499 0 00.365-.84l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997h.001zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584C4.75 6.151 8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"
              ></path>
            </svg>
            <p>Born November 24, 2000</p>
          </li>

          <li className="profile__info-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                d="M19.708 2H4.292A2.294 2.294 0 002 4.292v15.416A2.294 2.294 0 004.292 22h15.416A2.294 2.294 0 0022 19.708V4.292A2.294 2.294 0 0019.708 2zm.792 17.708a.793.793 0 01-.792.792H4.292a.793.793 0 01-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71v-.002z"
              ></path>
              <path
                fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                d="M7.032 10.035a1.285 1.285 0 100-2.57 1.285 1.285 0 000 2.57zM7.032 14.441a1.285 1.285 0 100-2.57 1.285 1.285 0 000 2.57zM16.968 10.035a1.285 1.285 0 100-2.57 1.285 1.285 0 000 2.57zM16.968 14.441a1.285 1.285 0 100-2.57 1.285 1.285 0 000 2.57zM12 10.035a1.285 1.285 0 100-2.57 1.285 1.285 0 000 2.57zM12 14.441a1.285 1.285 0 100-2.57 1.285 1.285 0 000 2.57zM7.032 18.771a1.285 1.285 0 100-2.57 1.285 1.285 0 000 2.57zM12 18.771a1.285 1.285 0 100-2.57 1.285 1.285 0 000 2.57z"
              ></path>
            </svg>
            <p>Joined May 2020</p>
          </li>
        </ul>
        <div className="profile__info-follow">
          <p>
            <span className="profile__info-following">67</span>{" "}
            {languages[lang].profilePage.userFollowing}
          </p>
          <p>
            <span className="profile__info-followers">47</span>{" "}
            {languages[lang].profilePage.userFollowers}
          </p>
        </div>

        <ul className="profile__info-newlist">
          <li>
            <NavLink className="profile__info-newitem" to="/profile/tweets">
              {languages[lang].profilePage.tweets}
            </NavLink>
          </li>

          <li>
            <NavLink className="profile__info-newitem" to="/profile/replies">
              {languages[lang].profilePage.replies}
            </NavLink>
          </li>

          <li>
            <NavLink className="profile__info-newitem" to="/profile/media">
              {languages[lang].profilePage.media}
            </NavLink>
          </li>

          <li>
            <NavLink className="profile__info-newitem" to="/profile/likes">
              {languages[lang].profilePage.likes}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="profile__inf-bottom">
        <Routes>
          <Route path="/tweets" element={<Tweets />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProfileInfo;
