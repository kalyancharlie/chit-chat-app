import React from "react";
import "./reset.css";
import "./App.css";
import Media from "react-media";
import DesktopAppRoutes from "./routes/DesktopAppRoutes";
import MobileAppRoutes from "./routes/MobileAppRoutes";

// Application Context
export const AppContext = React.createContext();

function App() {
  return (
    <AppContext.Provider
      value={{ chats: {}, chatsScreen: {}, chatSettings: {} }}
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
