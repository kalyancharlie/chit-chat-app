import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import useAppContext from "../../hooks/useAppContext";

const ProfileSettingsHeader = () => {
  const {setShowProfileSettings } = useAppContext()
  return (
    <div className="profile-settings__header">
      <BsArrowLeft className="arrow-icon" title="Go back" onClick={(e) => {
        e.preventDefault()
        setShowProfileSettings(false)
      }} />
      <p className="component-name">Profile Details</p>
    </div>
  );
};

export default ProfileSettingsHeader;
