import "./RightSitebar.scss";
import React from "react";
import Footer from "./Footer/Footer";
import Input from "./Input/Input";
import TrendForYou from "./Trends/TrendForYou";
import MightLike from "./MightLike/MightLike";
import { Context } from "../../Content/Theme";

const RightSitebar = () => {
  const { state } = React.useContext(Context);
  return (
    <div className={`right__sitebar theme__` + state}>
      <Input />
      <TrendForYou />
      <MightLike />
      <Footer />
    </div>
  );
};

export default RightSitebar;
