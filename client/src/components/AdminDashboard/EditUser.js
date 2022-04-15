import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const EditUser = () => {
  return (
    <div className='modal-overlay'>
      <div className="modal user-modal">
        <div className="modal-header">
          <h3>Edit User</h3>
          <AiOutlineClose className='close-icon' />
        </div>
        <div className="modal-body">
          <input type="text" placeholder='First Name' className='admin-user-input' />
          <input type="text" placeholder='Last Name' className='admin-user-input' />
          <input type="text" placeholder='Email Id' className='admin-user-input' />
          <input type="password" placeholder='Password' className='admin-user-input' />
          <input type="password" placeholder='Confirm Password' className='admin-user-input' />
          <div className="modal-footer">
            <button className='admin-create-user-btn btn-reset'>Update</button>
            <button className='admin-cancel-user-btn btn-reset'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser