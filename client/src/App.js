import React, { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";
import { AppContext } from "./contexts/AppContext";
import DesktopAppRoutes from "./routes/DesktopAppRoutes";
import MobileAppRoutes from "./routes/MobileAppRoutes";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [activeChat, setActiveChat] = useState(null);
  const isMobileView = useMediaQuery("(max-width: 600px)");
  const [chats, setChats] = useState([]);
  const [chatSettings, setChatSettings] = useState(null);
  const [user, setUser] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    emailId: "",
    token: "",
    isAdmin: false,
  });
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const [isShowGroupModal, setIsShowGroupModal] = useState(false);

  useEffect(() => {
    console.log("mobile view status " + isMobileView);
  }, [isMobileView]);

  return (
    <AppContext.Provider
      value={{
        chats,
        setChats,
        chatSettings,
        setChatSettings,
        user,
        setUser,
        showProfileSettings,
        setShowProfileSettings,
        activeChat,
        setActiveChat,
        isMobileView,
        isShowGroupModal, 
        setIsShowGroupModal
      }}
    >
      {isMobileView ? <MobileAppRoutes /> : <DesktopAppRoutes />}
    </AppContext.Provider>
  );
}

export default App;
