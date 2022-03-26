import "./HomePage.scss";
import UserImg from "../../../Assets/Images/user-img.png";
import Buttons from "../../Buttons/Buttons";
import languages from "../../../Localization/Languages";
import { Context } from "../../../Content/Theme";
import { Context as LangContext } from "../../../Content/Localization";

import {
  ImageIcon,
  GifIcon,
  StatsIcon,
  SmileIcon,
  ScheduleIcon,
} from "../../Lib/Icons/Icons";
import React from "react";
const NewTweet = () => {
  const { state } = React.useContext(Context);
  const { lang } = React.useContext(LangContext);
  return (
    <div className="new__tweet">
      <div>
        <img className="new__tweet-userimg" src={UserImg} alt="iser-img" />
      </div>

      <div className="new__tweet-data">
        <textarea
          className={`new__tweet-textarea theme__` + state}
          rows={3}
          cols={35}
          placeholder={languages[lang].homePage.newTweetPlaseholder}
        ></textarea>

        <ul className="new__tweet-icon--list">
          <li>
            <a href="#link">
              <img src={ImageIcon} alt="imgicon" />
            </a>
          </li>
          <li>
            <a href="#link">
              <img src={GifIcon} alt="gificon" />
            </a>
          </li>
          <li>
            <a href="#link">
              <img src={StatsIcon} alt="statsicon" />
            </a>
          </li>
          <li>
            <a href="#link">
              <img src={SmileIcon} alt="smileicon" />
            </a>
          </li>
          <li>
            <a href="#link">
              <img src={ScheduleIcon} alt="scheduleicon" />
            </a>
          </li>
        </ul>
        <div className="new__tweet-button">
          <Buttons
            text={languages[lang].homePage.newTweetBtn}
            variant="new-tweet"
          />
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
