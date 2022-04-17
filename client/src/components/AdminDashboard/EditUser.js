import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { updateUser } from '../../api/AdminAPI'
import useAdminContext from '../../hooks/useAdminContext'

const EditUser = () => {
  const {isEditUserModalOpen, setIsEditUserModalOpen, registeredUsers, currentEditUser} = useAdminContext();
  const [formState, setFormState] = useState({})

  useEffect(() => {
    const searchUser = registeredUsers.find(usr => usr._id === currentEditUser)
    console.log('Found user', searchUser)
    setFormState((prev) => ({...searchUser}))
  }, [currentEditUser])

  // Update User Details Handler
  const updateDetailsHandler = async (e) => {
    e.preventDefault()
    const resp = await updateUser({userId: currentEditUser, ...formState})
    setIsEditUserModalOpen(false)
  }

  // Form state Handler
  const formStateHandler = (e) => {
    e.preventDefault()
    setFormState(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <div className={`${isEditUserModalOpen ? 'modal-overlay open-modal' : 'modal-overlay'}`}>
      <div className="modal user-modal">
        <div className="modal-header">
          <h3>Edit User</h3>
          <AiOutlineClose className='close-icon' title='Click to close' />
        </div>
        <form className="modal-body">
          <input type="text" placeholder='First Name' className='admin-user-input' name='firstName' onChange={formStateHandler} value={formState?.firstName} />
          <input type="text" placeholder='Last Name' className='admin-user-input' name="lastName" onChange={formStateHandler} value={formState?.lastName} />
          <input type="text" placeholder='Email Id' className='admin-user-input' name="emailId" disabled value={formState?.emailId} />
          <input type="password" placeholder='Password' className='admin-user-input' name="password" onChange={formStateHandler} />
          <input type="password" placeholder='Confirm Password' className='admin-user-input' />
          <div className="modal-footer">
            <button className='admin-create-user-btn btn-reset' onClick={updateDetailsHandler}>Update</button>
            <button className='admin-cancel-user-btn btn-reset' onClick={(e) => {
              e.preventDefault();
              setIsEditUserModalOpen(false)
            }}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser