import React, { useContext } from "react";
import { AdminPageContext } from "../../contexts/AdminPageContext";
import {removeUser} from '../../api/AdminAPI'

const AdminSearchUser = ({firstName, lastName, emailId, _id, setCurrentEditUser, removeUserHandler}) => {
  const {setIsEditUserModalOpen} = useContext(AdminPageContext)
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{emailId}</td>
      <td style={{textAlign: "center"}}>
        <button className="text-btn btn-reset" title="Edit User" onClick={(e) => {
          setCurrentEditUser(_id)
          console.log("current id", _id)
          setIsEditUserModalOpen(true)
        }} >
          Edit
        </button>{" "}
        |{" "}
        <button className="text-btn btn-reset" title="Remove User" onClick={async (e) => removeUser(_id)}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default AdminSearchUser;
