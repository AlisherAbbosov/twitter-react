import React from "react";
import "./Menu.scss";
import SiteLogo from "../../../Components/Lib/Icons/logo.png";
import languages from "../../../Localization/languages";
import Buttons from "../../Buttons/Buttons";
import { NavLink } from "react-router-dom";
import { Context } from "../../../Content/Theme";
import { Context as LangContext } from "../../../Content/Localization";

const Menu = () => {
  const { state } = React.useContext(Context);
  const { lang } = React.useContext(LangContext);
  return (
    <div className="menu">
      <div className="menu__icon">
        <NavLink to="/">
          <img className="menu__list-icons" src={SiteLogo} alt="Logo" />
        </NavLink>
      </div>
      <nav>
        <ul className=" menu__list">
          <li className="menu__item">
            <NavLink
              className={`menu__link theme__` + state}
              aria-current="page"
              to=""
            >
              <svg
                className="menu__list-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="24"
                fill="none"
                viewBox="0 0 26 24"
              >
                <path
                  fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                  d="M25.029 6.57L13.242.207a.876.876 0 00-.832 0L.625 6.571a.876.876 0 00.832 1.54l.951-.514 1.9 13.432c.25 1.418 1.527 2.406 3.102 2.406h10.829c1.577 0 2.852-.99 3.106-2.435l1.897-13.405.955.516a.88.88 0 001.186-.355.877.877 0 00-.354-1.185zm-5.411 14.156c-.125.707-.82.959-1.377.959H7.41c-.56 0-1.253-.252-1.373-.931L4.052 6.71l8.773-4.74 8.776 4.737-1.983 14.018z"
                ></path>
                <path
                  fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                  d="M8.415 11.954a4.415 4.415 0 004.41 4.41 4.415 4.415 0 004.41-4.41 4.415 4.415 0 00-4.41-4.41 4.415 4.415 0 00-4.41 4.41zm7.07 0a2.662 2.662 0 01-2.66 2.66 2.662 2.662 0 01-2.66-2.66 2.662 2.662 0 012.66-2.66 2.662 2.662 0 012.66 2.66z"
                ></path>
              </svg>
              {languages[lang].menu.home}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className={`menu__link theme__` + state} to={"/explore"}>
              <svg
                className="menu__list-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                fill="none"
                viewBox="0 0 28 29"
              >
                <mask
                  id="mask0_8_707"
                  style={{ maskType: "alpha" }}
                  width="28"
                  height="29"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path fill="#C4C4C4" d="M0 0.768H28V28.768H0z"></path>
                </mask>
                <g mask="url(#mask0_8_707)">
                  <path
                    fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                    d="M24.209 10.202h-4.585l.434-4.984a.876.876 0 00-.796-.948.877.877 0 00-.948.797l-.446 5.134h-7.374l.432-4.982a.876.876 0 00-.793-.949.876.876 0 00-.949.797l-.446 5.134H4.121a.876.876 0 000 1.75h4.466l-.642 7.381H3.208a.875.875 0 000 1.75h4.585l-.434 4.984a.876.876 0 00.796.948l.077.003c.45 0 .83-.344.87-.8l.447-5.134h7.374l-.432 4.982a.877.877 0 00.796.948l.077.004c.449 0 .83-.344.87-.8l.446-5.134h4.616a.877.877 0 00.875-.875.877.877 0 00-.875-.875H18.83l.642-7.381h4.736a.875.875 0 000-1.75zm-7.135 9.13H9.701l.642-7.38h7.373l-.642 7.38z"
                  ></path>
                </g>
              </svg>
              {languages[lang].menu.explore}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className={`menu__link theme__` + state}
              to="/notifications"
            >
              <svg
                className="menu__list-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                fill="none"
                viewBox="0 0 28 29"
              >
                <mask
                  id="mask0_8_711"
                  style={{ maskType: "alpha" }}
                  width="28"
                  height="29"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path fill="#C4C4C4" d="M0 0.768H28V28.768H0z"></path>
                </mask>
                <g mask="url(#mask0_8_711)">
                  <path
                    fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                    d="M25.314 20.062c-.023-.018-2.497-1.913-2.453-7.035.023-2.954-.948-5.579-2.739-7.39-1.604-1.626-3.776-2.524-6.115-2.536h-.015c-2.338.012-4.51.91-6.116 2.537-1.79 1.812-2.763 4.435-2.737 7.39.043 5.051-2.357 6.96-2.452 7.034a.876.876 0 00.521 1.579h5.74c.12 2.695 2.33 4.853 5.052 4.853 2.722 0 4.93-2.158 5.048-4.853h5.742a.87.87 0 00.829-.6.872.872 0 00-.307-.977l.002-.002zm-11.313 4.679a3.314 3.314 0 01-3.3-3.101h6.6c-.117 1.726-1.544 3.103-3.3 3.103v-.002zm-8.89-4.851c.863-1.32 1.806-3.533 1.778-6.879-.02-2.52.751-4.646 2.232-6.145C10.396 5.575 12.13 4.86 14 4.851c1.87.01 3.601.724 4.877 2.016 1.481 1.5 2.255 3.624 2.234 6.145-.028 3.346.916 5.56 1.779 6.879H5.111v-.001z"
                  ></path>
                </g>
              </svg>
              {languages[lang].menu.notifications}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className={`menu__link theme__` + state} to="/messages">
              <svg
                className="menu__list-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
                viewBox="0 0 24 25"
              >
                <mask
                  id="mask0_8_714"
                  style={{ maskType: "alpha" }}
                  width="24"
                  height="25"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path fill="#C4C4C4" d="M0 0.768H24V24.768H0z"></path>
                </mask>
                <g mask="url(#mask0_8_714)">
                  <path
                    fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                    d="M19.25 3.768H4.75A2.753 2.753 0 002 6.52v12.495a2.754 2.754 0 002.75 2.753h14.5A2.754 2.754 0 0022 19.015V6.52a2.753 2.753 0 00-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714L12.45 12.6a.81.81 0 01-.9-.002L3.5 7.232v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.99l7.24 4.83a2.265 2.265 0 002.52.001l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25v.003z"
                  ></path>
                </g>
              </svg>
              {languages[lang].menu.messages}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className={`menu__link theme__` + state} to="/bookmarks">
              <svg
                className="menu__list-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
                viewBox="0 0 24 25"
              >
                <mask
                  id="mask0_8_717"
                  style={{ maskType: "alpha" }}
                  width="24"
                  height="25"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path fill="#C4C4C4" d="M0 0.768H24V24.768H0z"></path>
                </mask>
                <g mask="url(#mask0_8_717)">
                  <path
                    fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                    d="M19.55 22.918a.755.755 0 01-.442-.144l-7.458-5.428-7.458 5.43A.75.75 0 013 22.17V5.02c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15a.749.749 0 01-.75.75h.002zm-7.9-7.25a.74.74 0 01.44.144l6.71 4.883V5.018a.752.752 0 00-.75-.75H5.25a.752.752 0 00-.75.75v15.677l6.71-4.883a.74.74 0 01.44-.144z"
                  ></path>
                </g>
              </svg>
              {languages[lang].menu.bookmarks}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className={`menu__link theme__` + state} to="/lists">
              <svg
                className="menu__list-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
                viewBox="0 0 24 25"
              >
                <path
                  fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                  d="M19.75 22.768H4.25c-1.24 0-2.25-1.01-2.25-2.25v-15.5c0-1.24 1.01-2.25 2.25-2.25h15.5c1.24 0 2.25 1.01 2.25 2.25v15.5c0 1.24-1.01 2.25-2.25 2.25zm-15.5-18.5a.75.75 0 00-.75.75v15.5c0 .413.336.75.75.75h15.5a.75.75 0 00.75-.75v-15.5a.75.75 0 00-.75-.75H4.25z"
                ></path>
                <path
                  fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                  d="M16.75 9.268h-10a.75.75 0 010-1.5h10a.75.75 0 110 1.5zm0 4.11h-10a.75.75 0 010-1.5h10a.75.75 0 010 1.5zm-5 4.11h-5a.75.75 0 110-1.5h5a.75.75 0 010 1.5z"
                ></path>
              </svg>
              {languages[lang].menu.lists}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className={`menu__link theme__` + state} to="/profile">
              <svg
                className="menu__list-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <mask
                  id="mask0_15_733"
                  style={{ maskType: "alpha" }}
                  width="24"
                  height="24"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path fill="#C4C4C4" d="M0 0H24V24H0z"></path>
                </mask>
                <g mask="url(#mask0_15_733)">
                  <path
                    fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                    d="M11.351 12.16c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392C15.617 3.687 13.88 2 11.351 2S7.085 3.687 6.705 6.514c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zm-3.16-5.448c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94h.001zm-1.576 1.016c-.126.16-.316.246-.552.246H5.199c-.235 0-.426-.085-.552-.246a.753.753 0 01-.12-.654c.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
                  ></path>
                </g>
              </svg>
              {languages[lang].menu.profile}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className={`menu__link theme__` + state} to="/more">
              <svg
                className="menu__list-icons"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                fill="none"
                viewBox="0 0 28 29"
              >
                <mask
                  id="mask0_8_820"
                  style={{ maskType: "alpha" }}
                  width="28"
                  height="29"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                >
                  <path fill="#C4C4C4" d="M0 0.768H28V28.768H0z"></path>
                </mask>
                <g
                  fill={`${state === "dark" ? "#FFFF" : "#000"}`}
                  mask="url(#mask0_8_820)"
                >
                  <path d="M18.958 12.435a2.045 2.045 0 00-2.041 2.041c0 1.124.914 2.042 2.041 2.042A2.045 2.045 0 0021 14.476a2.045 2.045 0 00-2.042-2.041zm0 2.916a.875.875 0 110-1.75.875.875 0 010 1.75zm-5.25-2.916a2.045 2.045 0 00-2.042 2.041c0 1.124.916 2.042 2.042 2.042a2.045 2.045 0 002.042-2.042 2.044 2.044 0 00-2.042-2.041zm0 2.916a.875.875 0 110-1.75.875.875 0 010 1.75zm-5.25-2.916a2.045 2.045 0 00-2.042 2.041c0 1.124.916 2.042 2.042 2.042a2.045 2.045 0 002.042-2.042 2.046 2.046 0 00-2.042-2.041zm0 2.916a.875.875 0 110-1.75.875.875 0 010 1.75z"></path>
                  <path d="M13.708 27.018c-6.916 0-12.541-5.626-12.541-12.542 0-6.916 5.625-12.541 12.541-12.541S26.25 7.56 26.25 14.476s-5.626 12.542-12.542 12.542zm0-23.333c-5.95 0-10.791 4.841-10.791 10.791s4.841 10.792 10.791 10.792S24.5 20.426 24.5 14.476 19.658 3.685 13.708 3.685z"></path>
                </g>
              </svg>
              {languages[lang].menu.more}
            </NavLink>
          </li>
        </ul>
        <Buttons text={languages[lang].menu.menuBtn} variant="menu-btn" />
      </nav>
    </div>
  );
};

export default Menu;
