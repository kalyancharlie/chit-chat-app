import React, { useContext, useEffect } from "react";
import AdminSearchUser from "./AdminSearchUser";
import {removeUser} from '../../api/AdminAPI'
import { AdminPageContext } from "../../contexts/AdminPageContext";

const AdminSearchResults = ({registeredUsers}) => {
  const {setCurrentEditUser} = useContext(AdminPageContext)

  return (
    <div className="admin-search-results__container">
      <table className="users-list-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {registeredUsers.map(user => {
            return <AdminSearchUser key={user._id} {...user} setCurrentEditUser={setCurrentEditUser} removeUserHandler={removeUser} />
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSearchResults;
