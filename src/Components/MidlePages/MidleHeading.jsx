import "./MidlePages.scss";
import CustomizeIcon from "../Lib/Icons/Customize.svg";

const MidleHeading = () => {
  return (
    <div className="heading">
      <h2 className="heding__title">Home</h2>
      <img src={CustomizeIcon} alt="icon" />
    </div>
  );
};

export default MidleHeading;
