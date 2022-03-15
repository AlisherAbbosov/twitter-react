import searchIcon from "../Lib/Icons/search.svg";
import SettingsIcon from "../Lib/Icons/settings.svg";
import UserImg from "../../Assets/Images/user-img.png";
import Buttons from "../Buttons/Buttons";

const Input = () => {
  return (
    <div className="search">
      <label className="search__label" htmlFor="search-input">
        <img src={searchIcon} alt="search" />
      </label>
      <input
        className="search__input"
        type="text"
        id="search-input"
        placeholder="Search Twitter"
      />
    </div>
  );
};

const Trend = ({ trendLovation, trendTitle, tweets }) => {
  return (
    <div className="trend">
      <div>
        <p className="trend__location">{trendLovation}</p>
        <h5 className="trend__title">{trendTitle}</h5>
        <p className="trend__tweets trend__location">
          <span className="trend__tweets-num"> {tweets}</span> Tweets
        </p>
      </div>
    </div>
  );
};

const Trends = () => {
  return (
    <div className="trends">
      <div className="trends__top">
        <h4 className="trends__top-title">Trends for you</h4>
        <a href="#link">
          <img src={SettingsIcon} alt="" />
        </a>
      </div>
      <div className="trends__body">
        <Trend
          trendLovation="Trending in Germany"
          trendTitle="Revolution"
          tweets="50.4K"
        />
        <Trend
          trendLovation="Trending in Germany"
          trendTitle="Revolution"
          tweets="50.4K"
        />
      </div>
    </div>
  );
};

const Likers = ({ UserFirstName, UserName }) => {
  return (
    <div className="likers">
      <img className="likers__img" src={UserImg} alt="user img" />
      <div>
        <h4 className="likers__name">{UserFirstName}</h4>
        <p className="likers__username">{UserName}</p>
      </div>
      <div className="likers__btn">
        <Buttons text={"Follow"} variant={"follow"} />
      </div>
    </div>
  );
};

const MightLike = () => {
  return (
    <div className="mightlike">
      <h3 className="mightlike__title">You might like</h3>
      <Likers UserFirstName={"Shuhratbek"} UserName={"@mrshukhrat"} />
      <Likers UserFirstName={"Shuhratbek"} UserName={"@mrshukhrat"} />
    </div>
  );
};

export { Input, Trends, MightLike };
