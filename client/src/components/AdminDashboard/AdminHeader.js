import React from "react";
import Icon from "../Icon";
import {IoLogOutSharp} from 'react-icons/io5'
import { AiFillDashboard } from "react-icons/ai";
import {useNavigate} from 'react-router-dom'
import useAppContext from "../../hooks/useAppContext";

const AdminHeader = ({user}) => {
  const navigator = useNavigate()
  const {setUser, setShowProfileSettings, showProfileSettings} = useAppContext();
  console.log("userdetails", user)
  
  // Toggle Profile Details
  const toggleProfileDetails = (e) => {
    console.log("toggle",showProfileSettings )
    setShowProfileSettings(prev => (!prev))
  }

  // Logout Handler
  const logoutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem('userInfo')
    setUser(() => ({token: '', emailId: ''}))
    navigator('/login', {replace: true})
  }
  
  return (
    <div className="dashboard-header__container">
      <p className="page-name"><AiFillDashboard className="dashboard-icon" />Admin Dashboard Panel</p>
      <div className="dashboard-header">
        <div className="icon-ring" title="View Profile Details" onClick={toggleProfileDetails}>
          <Icon
            firstName={user.firstName}
            lastName={user.lastName}
            classNames={["icon__md", "admin-profile-icon"]}
          />
        </div>
        <p className="admin-user-name">{`${user.firstName} ${user.lastName}`}</p>
        <button title="Click to Logout" className="admin-logout-btn btn-reset" onClick={logoutHandler}><IoLogOutSharp className="admin-logout-icon" /> Logout</button>
      </div>
    </div>
  );
};

export default AdminHeader;
