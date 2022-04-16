import React, {useState} from "react";
import "./reset.css";
import "./App.css";
import Media from "react-media";
import DesktopAppRoutes from "./routes/DesktopAppRoutes";
import MobileAppRoutes from "./routes/MobileAppRoutes";

// Application Context
export const AppContext = React.createContext();

function App() {
  const [chats, setChats] = useState(null)
  const [chatSettings, setChatSettings] = useState(null);
  const [user, setUser] = useState({_id: '', firstName: '', lastName: '', emailId: '', token: '', isAdmin: false})
  const [showProfileSettings, setShowProfileSettings] = useState(false)
  return (
    <AppContext.Provider
      value={{ chats, setChats, chatSettings, setChatSettings, user, setUser, showProfileSettings, setShowProfileSettings }}
    >
      <Media
        queries={{
          small: "(max-width: 450px)",
          medium: "(min-width: 451px) and (max-width: 899px)",
          large: "(min-width: 900px)",
        }}
      >
        {(matches) => (
          <div>
            {matches.small && <MobileAppRoutes />}
            {matches.medium && <DesktopAppRoutes />}
            {matches.large && <DesktopAppRoutes />}
          </div>
        )}
      </Media>
    </AppContext.Provider>
  );
}

export default App;
