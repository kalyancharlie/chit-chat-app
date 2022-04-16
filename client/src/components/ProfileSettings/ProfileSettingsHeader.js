import React, {useContext} from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AppContext } from "../../App";

const ProfileSettingsHeader = () => {
  const {setShowProfileSettings } = useContext(AppContext)
  return (
    <div className="profile-settings__header">
      <BsArrowLeft className="arrow-icon" title="Go back" onClick={(e) => {
        e.preventDefault()
        setShowProfileSettings(false)
      }} />
      <p className="component-name">Profile Settings</p>
    </div>
  );
};

export default ProfileSettingsHeader;
