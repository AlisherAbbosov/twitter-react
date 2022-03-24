import UserImg from "../../../Assets/Images/user-img.png";
import "./User.scss";

const User = ({ UserFirstName, UserName }) => {
  return (
    <div className="user">
      <img className="user__img" src={UserImg} alt="user img" />
      <div>
        <h4 className="user__name">{UserFirstName}</h4>
        <p className="user__username">{UserName}</p>
      </div>
    </div>
  );
};

export default User;
