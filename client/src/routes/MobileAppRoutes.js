import React from "react";
import Chats from "../components/Chats";
import ChatScreen from "../components/ChatScreen";
import ChatSettings from "../components/ChatSettings";
import ProfileSettings from "../components/ProfileSettings";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminDashboardPage from "../pages/AdminDashboardPage/AdminDashboardPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import MobileApp from "../pages/MobileAppPage/MobileApp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const MobileAppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/" element={<MobileApp />}>
          <Route path="chats" element={<Chats />}></Route>
          <Route path="chats/:chatid" element={<ChatScreen />} />
          <Route path="chats/:chatid/settings" element={<ChatSettings />} />
          <Route path="*" element={<Navigate to="/page-not-found" />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="*" element={<Navigate to="/page-not-found" />} />
        </Route>
        <Route path="*" element={<Navigate to="/page-not-found" />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default MobileAppRoutes;
