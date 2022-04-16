import React from 'react'
import Chats from '../../components/Chats'
import CreateGroupModal from '../../components/Chats/CreateGroupModal'
import ChatScreen from '../../components/ChatScreen'
import ChatSettings from '../../components/ChatSettings'
import ConfirmModal from '../../components/ConfirmModal'
import ProfileSettings from '../../components/ProfileSettings'

const DesktopApp = () => {
  return (
     // <AdminDashboardPage />
    // <LoginPage />
    <div className="app-container">
      <Chats />
      <div className="flex fs">
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