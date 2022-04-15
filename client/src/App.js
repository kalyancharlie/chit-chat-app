import "./reset.css";
import "./App.css";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import ChatSettings from "./components/ChatSettings";

function App() {
  return (
    <div className="app-container">
      <Chats />
      <div className="flex fs">
        <ChatScreen />
        <ChatSettings />
      </div>
    </div>
  );
}

export default App;
