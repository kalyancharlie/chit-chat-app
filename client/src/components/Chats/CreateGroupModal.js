import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import useAppContext from '../../hooks/useAppContext'
import {createGroup} from '../../api/ChatAPI'

const CreateGroupModal = () => {
  const [groupName, setGroupName] = useState('')
  const {isShowGroupModal, setIsShowGroupModal, user, setChats} = useAppContext()
  // Create Group Handler
  const createGroupHandler = async (e) => {
    try {
      if (e) e.preventDefault()
      const rep = await createGroup({senderId: user?._id, groupName})
      if (rep.status && rep.groupData) {
        setChats(prev => ([rep.groupData, ...prev]))
      }
      console.log("creat roup statsu", rep)
      closeCreateGrooupModal()
      setGroupName('')
    } catch (error) {
      console.log('error in crating torup', error);
    }
  }
  // Close Create Group Modal
  const closeCreateGrooupModal = (e) => {
    if (e) e.preventDefault()
    setIsShowGroupModal(false)
  }
  return (
    <div className={`${isShowGroupModal ? 'modal-overlay open-modal' : 'modal-overlay'}`}>
      <div className="modal user-modal">
        <div className="modal-header">
          <h3>Create Group</h3>
          <AiOutlineClose className='close-icon' title='Click to close' onClick={closeCreateGrooupModal} />
        </div>
        <div className="modal-body">
          <input type="text" placeholder='Group Name' className='admin-user-input' value={groupName} onChange={(e) => {
            setGroupName(() => (e.target.value))
          }} />
          <div className="modal-footer">
            <button className='admin-create-user-btn btn-reset' onClick={createGroupHandler}>Create</button>
            <button className='admin-cancel-user-btn btn-reset' onClick={closeCreateGrooupModal}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateGroupModal