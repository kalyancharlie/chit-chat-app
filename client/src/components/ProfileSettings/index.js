import React, { useContext } from "react";
import { AppContext } from "../../App";
import GroupInfo from "../ChatSettings/GroupInfo";
import "./ProfileSettings.css";
import ProfileSettingsHeader from "./ProfileSettingsHeader";
import ProfileSummary from "./ProfileSummary";
import {useNavigate} from 'react-router-dom'

function ProfileSettings() {
  const navigator = useNavigate()
  const {showProfileSettings, setShowProfileSettings, setUser, user} = useContext(AppContext)
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
        <GroupInfo firstName={user.firstName} lastName={user.lastName} isAdmin={user.isAdmin} />
        <ProfileSummary />
        <button className="logout-fullspan" onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
}

export default ProfileSettings;
