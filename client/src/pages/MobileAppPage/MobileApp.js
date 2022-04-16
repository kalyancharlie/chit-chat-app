import {Outlet} from 'react-router-dom'

const MobileApp = () => {
  return (
     // <AdminDashboardPage />
    // <LoginPage />
    <div className="app-container">
      <Outlet />
      {/* <Chats /> */}
      {/* <div className="flex fs">
        <ChatScreen />
        <ChatSettings />
      </div>
      <ProfileSettings />
      <CreateGroupModal />
      <ConfirmModal /> */}
    </div>
  )
}

export default MobileApp