import React from "react";
import {removeUser} from '../../api/AdminAPI'
import useAdminContext from "../../hooks/useAdminContext";

const AdminSearchUser = ({firstName, lastName, emailId, _id, setCurrentEditUser, removeUserHandler}) => {
  const {setIsEditUserModalOpen} = useAdminContext()
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
