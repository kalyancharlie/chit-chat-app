import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const CreateGroupModal = () => {
  return (
    <div className='modal-overlay'>
      <div className="modal user-modal">
        <div className="modal-header">
          <h3>Create Group</h3>
          <AiOutlineClose className='close-icon' title='Click to close' />
        </div>
        <div className="modal-body">
          <input type="text" placeholder='Group Name' className='admin-user-input' />
          <div className="modal-footer">
            <button className='admin-create-user-btn btn-reset'>Create</button>
            <button className='admin-cancel-user-btn btn-reset'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGroupModal