import React, {useState, useEffect} from "react";
import "./reset.css";
import "./App.css";
import Media from "react-media";
import DesktopAppRoutes from "./routes/DesktopAppRoutes";
import MobileAppRoutes from "./routes/MobileAppRoutes";
import useMediaQuery from './hooks/useMediaQuery'

// Application Context
export const AppContext = React.createContext();

function App() {
  const [activeChat, setActiveChat] = useState(null)
  const isMobileView = useMediaQuery("(max-width: 450px)")
  const [chats, setChats] = useState(null)
  const [chatSettings, setChatSettings] = useState(null);
  const [user, setUser] = useState({_id: '', firstName: '', lastName: '', emailId: '', token: '', isAdmin: false})
  const [showProfileSettings, setShowProfileSettings] = useState(false)
  
  useEffect(() => {
    console.log('mobile view status ' + isMobileView)
  }, [isMobileView])
  
  return (
    <AppContext.Provider
      value={{ chats, setChats, chatSettings, setChatSettings, user, setUser, showProfileSettings, setShowProfileSettings, activeChat, setActiveChat, isMobileView }}
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
