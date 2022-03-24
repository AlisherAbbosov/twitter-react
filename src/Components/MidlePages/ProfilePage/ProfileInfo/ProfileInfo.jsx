import InfoImg from "../../../../Assets/Images/profile.jpg";
import UserImgBig from "../../../../Assets/Images/user-img-big.png";
import {
  LocateIcon,
  LinkIcon,
  BornIcon,
  JoinedIcon,
} from "../../../Lib/Icons/Icons";

import { Routes, Route, NavLink } from "react-router-dom";
import Tweets from "../Tweets/Tweets";

const ProfileInfo = () => {
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
            <img src={LocateIcon} alt="icon" />
            <a href="#link">Mashag’daman</a>
          </li>

          <li className="profile__info-item">
            <img src={LinkIcon} alt="icon" />
            <a href="https://t.me/boburjon_mavlonov">t.me/boburjon_mavlonov</a>
          </li>

          <li className="profile__info-item">
            <img src={BornIcon} alt="icon" />
            <p>Born November 24, 2000</p>
          </li>

          <li className="profile__info-item">
            <img src={JoinedIcon} alt="icon" />
            <p>Joined May 2020</p>
          </li>
        </ul>
        <div className="profile__info-follow">
          <p>
            <span className="profile__info-following">67</span> Following
          </p>
          <p>
            <span className="profile__info-followers">47</span>Followers
          </p>
        </div>

        <ul className="profile__info-newlist">
          <li>
            <NavLink className="profile__info-newitem" to="/profile/tweets">
              Tweets
            </NavLink>
          </li>

          <li>
            <NavLink className="profile__info-newitem" to="/profile/replies">
              Tweets & replies
            </NavLink>
          </li>

          <li>
            <NavLink className="profile__info-newitem" to="/profile/media">
              Media
            </NavLink>
          </li>

          <li>
            <NavLink className="profile__info-newitem" to="/profile/likes">
              Likes
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
