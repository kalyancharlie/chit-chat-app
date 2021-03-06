import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const ConfirmModal = () => {
  return (
    <div className='modal-overlay'>
      <div className="modal user-modal">
        <div className="modal-header">
          <h3>Confirm Action</h3>
          <AiOutlineClose className='close-icon' title='Click to close' />
        </div>
        <div className="modal-body">
          <p>Do you want to continue?</p>
          <div className="modal-footer">
            <button className='admin-create-user-btn btn-reset' title='Click to continue'>Continue</button>
            <button className='admin-cancel-user-btn btn-reset' title="Click to cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal