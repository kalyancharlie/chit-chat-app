import "./reset.css";
import "./App.css";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import ChatSettings from "./components/ChatSettings";
import ProfileSettings from './components/ProfileSettings'

function App() {
  return (
    <div className="app-container">
      <Chats />
      <div className="flex fs">
        <ChatScreen />
        <ChatSettings />
      </div>
      <ProfileSettings />
    </div>
  );
}

export default App;
