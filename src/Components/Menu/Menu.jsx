import "./Menu.scss";
import SiteLogo from "../../Components/Lib/Icons/logo.png";
import {
  HomeIcon,
  ExploreIcon,
  NotificationIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../../Components/Lib/Icons/Icons";
import Buttons from "../Buttons/Buttons";
///////

const Menu = () => {
  return (
    <div className="menu col-3">
      <div className="menu__icon">
        <img className="menu__list-icons" src={SiteLogo} alt="Logo" />
      </div>
      <nav>
        <ul className="navbar-nav menu__list">
          <li className="menu__item">
            <a
              className="nav-link menu__link active"
              aria-current="page"
              href="#link"
            >
              <img
                className="menu__list-icons"
                src={HomeIcon}
                alt="home icon"
              />
              Home
            </a>
          </li>
          <li className="menu__item">
            <a className="nav-link menu__link" href="#link">
              <img className="menu__list-icons" src={ExploreIcon} alt="icon" />
              Explore
            </a>
          </li>
          <li className="menu__item">
            <a className="nav-link menu__link" href="#link">
              <img
                className="menu__list-icons"
                src={NotificationIcon}
                alt="icon"
              />
              Notifications
            </a>
          </li>
          <li className="menu__item">
            <a className="nav-link menu__link" href="#link">
              <img className="menu__list-icons" src={MessagesIcon} alt="icon" />
              Messages
            </a>
          </li>
          <li className="menu__item">
            <a className="nav-link menu__link" href="#link">
              <img
                className="menu__list-icons"
                src={BookmarksIcon}
                alt="icon"
              />
              Bookmarks
            </a>
          </li>
          <li className="menu__item">
            <a className="nav-link menu__link" href="#link">
              <img className="menu__list-icons" src={ListsIcon} alt="icon" />
              Lists
            </a>
          </li>
          <li className="menu__item">
            <a className="nav-link menu__link" href="#link">
              <img className="menu__list-icons" src={ProfileIcon} alt="icon" />
              Profile
            </a>
          </li>
          <li className="menu__item">
            <a className="nav-link menu__link" href="#link">
              <img className="menu__list-icons" src={MoreIcon} alt="icon" />
              More
            </a>
          </li>
        </ul>
        <Buttons text="Tweet" variant="menu-btn" />
      </nav>
    </div>
  );
};

export default Menu;
