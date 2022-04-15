import React from "react";
import GroupInfo from "../ChatSettings/GroupInfo";
import "./ProfileSettings.css";
import ProfileSettingsHeader from "./ProfileSettingsHeader";
import ProfileSummary from "./ProfileSummary";

function ProfileSettings() {
  return (
    <div className="profile-settings__container absolute-left-pos">
      <ProfileSettingsHeader />
      <div className="profile-settings-main__container">
        <GroupInfo />
        <ProfileSummary />
        <button className="logout-fullspan">Logout</button>
      </div>
    </div>
  );
}

export default ProfileSettings;
