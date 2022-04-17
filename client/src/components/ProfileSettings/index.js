import React from "react";
import GroupInfo from "../ChatSettings/GroupInfo";
import "./ProfileSettings.css";
import ProfileSettingsHeader from "./ProfileSettingsHeader";
import ProfileSummary from "./ProfileSummary";
import {useNavigate} from 'react-router-dom'
import useAppContext from "../../hooks/useAppContext";
import ProfileInfo from "./ProfileInfo";

function ProfileSettings() {
  const navigator = useNavigate()
  const {showProfileSettings, setShowProfileSettings, setUser, user} = useAppContext()
  // Logout Handler
  const logoutHandler = (e) => {
    e.preventDefault()
    setShowProfileSettings(false)
    localStorage.removeItem('userInfo')
    setUser(() => ({token: '', emailId: ''}))
    navigator('/login', {replace: true})
  }

  return (
    <div className={`${showProfileSettings ? 'profile-settings__container absolute-left-pos profile-active' : 'profile-settings__container absolute-left-pos'}`}>
      <ProfileSettingsHeader />
      <div className="profile-settings-main__container">
        <ProfileInfo />
        <ProfileSummary />
        <button className="logout-fullspan" onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
}

export default ProfileSettings;
