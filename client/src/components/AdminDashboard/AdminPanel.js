import React, {useEffect, useState} from "react";
import Search from "../Search";
import AdminSearchResults from "./AdminSearchResults";
import { FaUserPlus } from "react-icons/fa";
import {getUsersInfo, searchUsers} from '../../api/AdminAPI'
import useAdminContext from "../../hooks/useAdminContext";

const AdminPanel = () => {
  const {setIsAddUserModalOpen, isAddUserModalOpen, registeredUsers, setRegisteredUsers } = useAdminContext();
  const [searchText, setSearchText] = useState("");

   // Get Registered Users
   const fetchRegisteredUsers = async() => {
    try {
      const resp = await getUsersInfo()
      const res = resp.data.users;
      // console.log("rgisterd user", res)
      setRegisteredUsers(() => ([...res]))
    } catch (error) {
      console.log('fetch users errror', error)
    }
  }

  // Get Queried Users
  const getQueriedUsers = async() => {
    try {
      const resp = await searchUsers(searchText)
      const res = resp.data.users;
      console.log("queried users", res)
      setRegisteredUsers(() => ([...res]))
    } catch (error) {
      console.log('get qureid users errror', error)
    }
  }
  useEffect(() => {
    if (searchText === "") {
      fetchRegisteredUsers()
      return
    }
    const timeoutId = setTimeout(() => {
      getQueriedUsers()
    }, 1000)
    return () => clearTimeout(timeoutId)

  }, [isAddUserModalOpen, searchText])
  
  // Open Add User Modal
  const openAddUserModal = (e) => {
    if (e) e.preventDefault();
    setIsAddUserModalOpen(true)
  }

  return (
    <div className="admin-panel__container">
      <div className="admin-panel__header">
        <Search setInputValue={setSearchText} textValue={searchText} />
        <button
          className="btn-reset admin-add-user-btn"
          title="Click to Add User"
          onClick={openAddUserModal} 
        >
          <FaUserPlus className="admin-add-user-icon" />
          Add User
        </button>
      </div>
      <AdminSearchResults registeredUsers={registeredUsers} />
    </div>
  );
};

export default AdminPanel;
