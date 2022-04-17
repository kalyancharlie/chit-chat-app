import { useContext } from "react";
import { AdminPageContext } from "../contexts/AdminPageContext";

const useAdminContext = () => {
  return useContext(AdminPageContext)
}

export default useAdminContext