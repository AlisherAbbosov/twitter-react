import Menu from "./Menu/Menu";
import User from "./User/User";
import "./LeftComponent.scss";
import { Context } from "../../Content/Theme";
import React from "react";

const LeftComponent = () => {
  const { state } = React.useContext(Context);

  return (
    <div className={`left__component theme__` + state}>
      <Menu />
      <User UserFirstName={"Bobur"} UserName={"@bobur_mavlonov"} />
    </div>
  );
};

export default LeftComponent;
