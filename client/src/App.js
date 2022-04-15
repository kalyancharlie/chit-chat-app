import "./reset.css";
import "./App.css";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import ChatSettings from "./components/ChatSettings";
import ProfileSettings from './components/ProfileSettings'
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminDashboardPage from './pages/AdminDashboardPage/AdminDashboardPage'
import CreateGroupModal from "./components/Chats/CreateGroupModal";
import ConfirmModal from "./components/ConfirmModal";

function App() {
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
  );
}

export default App;
