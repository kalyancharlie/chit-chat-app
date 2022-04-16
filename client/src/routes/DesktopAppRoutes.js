import React from "react";
import ChatScreen from "../components/ChatScreen";

import LoginPage from "../pages/LoginPage/LoginPage";
import AdminDashboardPage from "../pages/AdminDashboardPage/AdminDashboardPage";

import PageNotFound from "../pages/PageNotFound/PageNotFound";
import DesktopApp from "../pages/DesktopAppPage/DesktopApp";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const DesktopAppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/chats" element={<DesktopApp />}>
          <Route path=":chatid" element={<ChatScreen />} />
          <Route path="*" element={<Navigate to="/page-not-found" />} />
        </Route>
        <Route path="*" element={<Navigate to="/page-not-found" />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default DesktopAppRoutes;
