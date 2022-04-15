import "./reset.css";
import "./App.css";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import ChatSettings from "./components/ChatSettings";
import ProfileSettings from './components/ProfileSettings'
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <LoginPage />
    // <div className="app-container">
    //   <Chats />
    //   <div className="flex fs">
    //     <ChatScreen />
    //     <ChatSettings />
    //   </div>
    //   <ProfileSettings />
    // </div>
  );
}

export default App;
