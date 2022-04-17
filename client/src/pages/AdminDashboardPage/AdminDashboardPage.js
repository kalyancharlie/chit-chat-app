import React, { useState, useEffect } from "react";
import { AdminPageContext } from "../../contexts/AdminPageContext";
import AddUser from "../../components/AdminDashboard/AddUser";
import AdminHeader from "../../components/AdminDashboard/AdminHeader";
import AdminPanel from "../../components/AdminDashboard/AdminPanel";
import EditUser from "../../components/AdminDashboard/EditUser";
import ProfileSettings from "../../components/ProfileSettings";
import ConfirmModal from "../../components/AdminDashboard/ConfirmModal";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";

const AdminDashboardPage = () => {
  const navigator = useNavigate();
  const { user, setUser } = useAppContext()
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [currentEditUser, setCurrentEditUser] = useState(user._id)
  const [confirmModalState, setConfirmModalState] = useState({
    isConfirmed: false,
    isOpen: false,
  });
  

  const openConfirmModal = (e) => {
    if (e) e.preventDefault();
    setConfirmModalState((prev) => ({ ...prev, isOpen: true }));
  };

  const confirmModalRejected = (e) => {
    if (e) e.preventDefault();
    setConfirmModalState((prev) => ({
      ...confirmModalState,
      isConfirmed: false,
      isOpen: false,
    }));
  };

  const confirmModalAccepted = (e) => {
    if (e) e.preventDefault();
    setConfirmModalState((prev) => ({
      ...confirmModalState,
      isConfirmed: true,
      isOpen: false,
    }));
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("local storage", userInfo);
    if (!userInfo) {
      return navigator("/login", { message: "Session Expired. Login Again" });
    }
    if (userInfo.token === '') {
      return navigator("/login", { message: "Session Expired. Login Again" });
    }
    setUser(() => userInfo);
  }, []);

  return (
    <AdminPageContext.Provider
      value={{
        isAddUserModalOpen,
        setIsAddUserModalOpen,
        confirmModalState,
        openConfirmModal,
        confirmModalAccepted,
        confirmModalRejected,
        setConfirmModalState,
        registeredUsers,
        setRegisteredUsers,
        isEditUserModalOpen,
        setIsEditUserModalOpen,
        setCurrentEditUser,
        currentEditUser
      }}
    >
      <div className="dashboard-page">
        <AdminHeader user={user} />
        <AdminPanel />
        <ProfileSettings />
        <AddUser />
        <EditUser _id={currentEditUser} />
        <ConfirmModal />
      </div>
    </AdminPageContext.Provider>
  );
};

export default AdminDashboardPage;
