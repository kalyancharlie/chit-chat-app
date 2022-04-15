import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const ProfileSettingsHeader = () => {
  return (
    <div className="profile-settings__header">
      <BsArrowLeft className="arrow-icon" title="Go back" />
      <p className="component-name">Profile Settings</p>
    </div>
  );
};

export default ProfileSettingsHeader;
