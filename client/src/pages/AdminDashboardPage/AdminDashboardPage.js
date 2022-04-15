import React from "react";
import AddUser from "../../components/AdminDashboard/AddUser";
import AdminHeader from "../../components/AdminDashboard/AdminHeader";
import AdminPanel from "../../components/AdminDashboard/AdminPanel";
import EditUser from "../../components/AdminDashboard/EditUser";
import ProfileSettings from "../../components/ProfileSettings";
import ConfirmModal from '../../components/ConfirmModal'
import "./styles.css";

const AdminDashboardPage = () => {
  return (
    <div className="dashboard-page">
      <AdminHeader />
      <AdminPanel />
      <ProfileSettings />
      <ConfirmModal />
      {/* <AddUser /> */}
      {/* <EditUser /> */}
    </div>
  );
};

export default AdminDashboardPage;
