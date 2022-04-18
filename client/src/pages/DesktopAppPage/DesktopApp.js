import React, {useEffect} from 'react'
import Chats from '../../components/Chats'
import CreateGroupModal from '../../components/Chats/CreateGroupModal'
import ChatScreen from '../../components/ChatScreen'
import ChatSettings from '../../components/ChatSettings'
import ConfirmModal from '../../components/ConfirmModal'
import ProfileSettings from '../../components/ProfileSettings'
import { useNavigate } from "react-router-dom";
import useAppContext from '../../hooks/useAppContext'

const DesktopApp = () => {
  const navigator = useNavigate();
  const { user, setUser } = useAppContext();
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
     // <AdminDashboardPage />
    // <LoginPage />
    <div className="app-container">
      <Chats />
      <div className="flex fs main-chat-area__screen">
        <ChatScreen />
        <ChatSettings />
      </div>
      <ProfileSettings />
      <CreateGroupModal />
      <ConfirmModal />
    </div>
  )
}

export default DesktopApp