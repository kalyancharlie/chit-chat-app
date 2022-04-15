import React from "react";
import Icon from "../Icon";
import {IoLogOutSharp} from 'react-icons/io5'
import { AiFillDashboard } from "react-icons/ai";

const AdminHeader = () => {
  return (
    <div className="dashboard-header__container">
      <p className="page-name"><AiFillDashboard className="dashboard-icon" />Admin Dashboard Panel</p>
      <div className="dashboard-header">
        <div className="icon-ring" title="View Profile Details">
          <Icon
            firstName="Kalyan"
            lastName="Bathula"
            classNames={["icon__md", "admin-profile-icon"]}
          />
        </div>
        <p className="admin-user-name">Kalyan Bathula</p>
        <button title="Click to Logout" className="admin-logout-btn btn-reset"><IoLogOutSharp className="admin-logout-icon" /> Logout</button>
      </div>
    </div>
  );
};

export default AdminHeader;
