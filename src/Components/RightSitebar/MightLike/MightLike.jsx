import Likers from "./Likers";
import React from "react";
import { Context } from "../../../Content/Theme";

const MightLike = () => {
  const { state } = React.useContext(Context);
  return (
    <div className={`mightlike box__` + state}>
      <h3 className="mightlike__title">You might like</h3>
      <Likers UserFirstName={"Shuhratbek"} UserName={"@mrshukhrat"} />
      <Likers UserFirstName={"Shuhratbek"} UserName={"@mrshukhrat"} />
    </div>
  );
};

export default MightLike;
