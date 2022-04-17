import React from 'react'
import Icon from '../Icon'
import {FaUserPlus} from 'react-icons/fa'
import { addUserToGroup } from '../../api/ChatAPI'
import useAppContext from '../../hooks/useAppContext'
import { getObjById } from '../../utils/util'

const SearchUserItem = ({firstName, lastName, emailId, _id, groupMembers, setGroupMembers}) => {
  const {user, activeChat} = useAppContext() 
  // Add User Handler
  const addUserHandler = async (e) => {
    try {
      if(e) e.preventDefault()
      const resp = await addUserToGroup({senderId: user?._id, groupId: activeChat?._id, targetUserId: _id})
      console.log('added status', resp)
      if(resp?.status) {
        setGroupMembers((prev) => ([...prev, getObjById(resp?.chatData?.users, _id)]))
        console.log('added success')
      }
    } catch (error) {
      console.log("error in adding user to grpuo")
    }
  }
  return (
    <div className='search-user-item__container'>
      <Icon firstName='Kalyan' lastName='Bathula' classNames={['icon__sm', 'search-user-icon']} />
      <div className='chat-info__container'>
      <p className='search-user__name'>{firstName} {lastName}</p>
      <p className='chat-info__message'>{emailId}</p>
      </div>
      <FaUserPlus className='add-user-icon' title='Add User' onClick={addUserHandler} />
    </div>
  )
}

export default SearchUserItem