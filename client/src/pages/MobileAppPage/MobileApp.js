import React, {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import useAppContext from '../../hooks/useAppContext';
import ProfileSettings from '../../components/ProfileSettings'
import ConfirmModal from '../../components/ConfirmModal'
import CreateGroupModal from '../../components/Chats/CreateGroupModal'

const MobileApp = () => {
  const navigator = useNavigate();
  const { user, setUser } = useAppContext()
  // Auth Check
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("local storage", userInfo);
    if (!userInfo) {
      return navigator("/login", { message: "Session Expired. Login Again" });
    }
    if (userInfo.token === '' || userInfo?.isAdmin) {
      return navigator("/login", { message: "Session Expired. Login Again" });
    }
    setUser(() => userInfo);
  }, []);

  return (
    <div className="app-container">
      <Outlet />
      <ProfileSettings />
      <CreateGroupModal />
      <ConfirmModal />
    </div>
  )
}

export default MobileApp