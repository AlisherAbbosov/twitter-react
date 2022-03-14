import "./TweetCard.scss";
import UserImg from "../../../../Assets/Images/user-img2.png";
import {
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
  StatisticsIcon,
} from "../../../Lib/Icons/Icons";

const TweetsCard = ({ name, lastSeen, userName, text }) => {
  return (
    <div className="tweet__card">
      <div className="tweet__card-img">
        <img src={UserImg} alt="" />
      </div>

      <div className="tweet__card-data">
        <div className="tweet__card-user-info">
          <a className="user__name" href="#link">
            <h4 className="user__name">{name}</h4>
          </a>
          <p className="user__name-username">{userName}</p>
          <span className="user__name-username">·</span>
          <p className="user__name-username user__lastseen">{lastSeen}</p>
        </div>

        <div className="user__data">
          <p className="user__data-text">{text}</p>
          <ul className="tweet__card-list">
            <li>
              <a href="#link">
                <img
                  className="tweet__card-icons"
                  src={CommentIcon}
                  alt="icon"
                />
                <span className="tweet__card-icon-num tweet__card-comment-num">
                  10
                </span>
              </a>
            </li>
            <li>
              <a href="#link">
                <img
                  className="tweet__card-icons"
                  src={RetweetIcon}
                  alt="icon"
                />
                <span className="tweet__card-icon-num">1</span>
              </a>
            </li>
            <li>
              <a href="#link">
                <img className="tweet__card-icons" src={LikeIcon} alt="icon" />
                <span className="tweet__card-icon-num">8</span>
              </a>
            </li>
            <li>
              <a href="#link">
                <img className="tweet__card-icons" src={ShareIcon} alt="icon" />
              </a>
            </li>
            <li>
              <a href="#link">
                <img
                  className="tweet__card-icons"
                  src={StatisticsIcon}
                  alt="icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TweetsCard;
