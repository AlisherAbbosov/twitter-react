import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfileInfo />
    </div>
  );
};

export default ProfilePage;
