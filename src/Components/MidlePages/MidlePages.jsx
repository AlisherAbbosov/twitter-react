import HomePage from "./HomePage/HomePage";
import "./MidlePages.scss";
import ProfilePage from "./ProfilePage/ProfilePage";
import { Context } from "../../Content/Theme";
import { Routes, Route } from "react-router-dom";
import React from "react";

const MidlePages = () => {
  const { state } = React.useContext(Context);
  return (
    <div className={`pages theme__` + state}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/*" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default MidlePages;
