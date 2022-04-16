import React, {useContext} from 'react'
import { AdminPageContext } from '../../contexts/AdminPageContext'

import { AiOutlineClose } from 'react-icons/ai'

const ConfirmModal = () => {
  const { confirmModalState, confirmModalAccepted, confirmModalRejected } = useContext(AdminPageContext);
  return (
    <div className={`${confirmModalState.isOpen ? 'modal-overlay open-modal' : 'modal-overlay close-modal'}`}>
      <div className="modal user-modal">
        <div className="modal-header">
          <h3>Confirm Action</h3>
          <AiOutlineClose className='close-icon' title='Click to close' />
        </div>
        <div className="modal-body">
          <p>Do you want to continue?</p>
          <div className="modal-footer">
            <button className='admin-create-user-btn btn-reset' title='Click to continue' onClick={confirmModalAccepted}>Continue</button>
            <button className='admin-cancel-user-btn btn-reset' title="Click to cancel" onClick={confirmModalRejected}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal