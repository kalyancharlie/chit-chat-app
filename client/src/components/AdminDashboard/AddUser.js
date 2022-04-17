import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useAdminContext from '../../hooks/useAdminContext'
import log from "../../utils/logger";
import { addUser } from "../../api/AdminAPI";

const AddUser = () => {
  const {
    isAddUserModalOpen,
    setIsAddUserModalOpen,
    confirmModalState,
    openConfirmModal,
    setConfirmModalState,
  } = useAdminContext()
  const [formState, setFormState] = useState({});

  // Close Add User Modal
  const closeAddUserModal = (e) => {
    if (e) e.preventDefault();
    openConfirmModal();
  };
  // Reset Form
  const resetAddUserForm = () => {
    log("from reset complete");
  };
  // Create User Handler
  const createUserHandler = async (e) => {
    try {
      if (e) e.preventDefault();
      const userCreationStatus = await addUser(formState);
      log("user created");
      log(userCreationStatus);
      setIsAddUserModalOpen(false);
      resetAddUserForm();
    } catch (error) {
      log("error in creating user", error);
    }
  };
  // Form State Handler
  const formStateHandler = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Effects
  useEffect(() => {
    log("Modal ", isAddUserModalOpen);
  }, [isAddUserModalOpen]);

  useEffect(() => {
    if (isAddUserModalOpen && !confirmModalState.isConfirmed) {
      // setIsAddUserModalOpen(false)
      // resetAddUserForm();
    } else if (isAddUserModalOpen && confirmModalState.isConfirmed) {
      setIsAddUserModalOpen(false);
      resetAddUserForm();
      setConfirmModalState((prev) => ({ ...prev, isConfirmed: false }));
    }
  }, [confirmModalState?.isConfirmed]);

  return (
    <div
      className={`${
        isAddUserModalOpen
          ? "modal-overlay open-modal"
          : "modal-overlay close-modal"
      }`}
    >
      <div className="modal user-modal">
        <div className="modal-header">
          <h3>Add User</h3>
          <AiOutlineClose
            className="close-icon"
            title="Click to close"
            onClick={closeAddUserModal}
          />
        </div>
        <form className="modal-body">
          <input
            type="text"
            placeholder="First Name"
            className="admin-user-input"
            name="firstName"
            onChange={formStateHandler}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="admin-user-input"
            name="lastName"
            onChange={formStateHandler}
          />
          <input
            type="text"
            placeholder="Email Id"
            className="admin-user-input"
            name="emailId"
            onChange={formStateHandler}
          />
          <input
            type="password"
            placeholder="Password"
            className="admin-user-input"
            name="password"
            onChange={formStateHandler}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="admin-user-input"
            name="confirmPassword"
            onChange={formStateHandler}
          />
          <div className="modal-footer">
            <button
              className="admin-create-user-btn btn-reset"
              onClick={createUserHandler}
            >
              Create
            </button>
            <button
              className="admin-cancel-user-btn btn-reset"
              onClick={closeAddUserModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
