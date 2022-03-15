import "./MidlePages.scss";
import CustomizeIcon from "../Lib/Icons/Customize.svg";

const MidleHeading = () => {
  return (
    <div className="heading">
      <h2 className="heding__title">Home</h2>
      <div className="heading__selects">
        <select className="form-select heading__select">
          <option value="uz">Uz</option>
          <option value="ru">Ru</option>
          <option value="en">En</option>
        </select>

        <select className="form-select heading__select">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <img src={CustomizeIcon} alt="icon" />
    </div>
  );
};

export default MidleHeading;
