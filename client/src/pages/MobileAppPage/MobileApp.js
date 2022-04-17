import React, {useEffect} from 'react'
import {Outlet} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import useAppContext from '../../hooks/useAppContext';

const MobileApp = () => {
  const navigator = useNavigate();
  const { user, setUser } = useAppContext()
  // Auth Check
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("local storage", userInfo);
    if (!userInfo) {
      return navigator("/login", { message: "Session Expired. Login Again" });
    }
    if (userInfo.token === '' || userInfo?.isAdmin) {
      return navigator("/login", { message: "Session Expired. Login Again" });
    }
    setUser(() => userInfo);
  }, []);

  return (
    <div className="app-container">
      <Outlet />
    </div>
  )
}

export default MobileApp