import React from 'react'
import Icon from '../Icon'
import {MdDelete} from 'react-icons/md'
import {removeUserFromGroup} from '../../api/ChatAPI'
import useAppContext from '../../hooks/useAppContext'

const GroupMember = ({firstName, lastName, emailId, _id, setGroupMembers, groupMembers}) => {
  const {user, activeChat} = useAppContext()
  // Remove User to Group handler
  const removeFromGroupHandler = async (e) => {
    try {
      const resp = await removeUserFromGroup({senderId: user?._id, groupId: activeChat?._id, targetUserId: _id})
      if(resp?.status) {
        const newGroupMembers = groupMembers?.filter(member => member?._id !== _id)
        setGroupMembers(() => (newGroupMembers))
        console.log('user removed from grp succesfully')
        console.log('status', resp)
      }
    } catch (error) {
      console.log("remove suer serror")
      console.log(error)
    }
  }
  return (
    <div className='group-member__container'>
      <Icon firstName={firstName} lastName={lastName} classNames={['icon__sm', 'search-user-icon']} />
      <p className='search-user__name'>{firstName} {lastName}</p>
      {activeChat?.groupAdmin?._id === user?._id && _id !== user?._id && <MdDelete className='add-user-icon' onClick={removeFromGroupHandler} title="Remove User" />} 
    </div>
  )
}

export default GroupMember