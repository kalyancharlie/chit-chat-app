import React from 'react'
import Icon from '../Icon'
import Info from '../Info'
import {IoCreateOutline} from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'

const UserInfo = () => {
  const {user, setShowProfileSettings, setIsShowGroupModal} = useAppContext()

  // Profile Modal Handler
  const showProfileHandler = (e) => {
    e.preventDefault()
    setShowProfileSettings(() => true)
  }
  // Group Modal Handler
  const showCreateGroupHandler = (e) => {
    e.preventDefault()
    setIsShowGroupModal(() => true)
  }
  return (
    <div className='userinfo__container' >
      <Icon clickHandler={showProfileHandler}  firstName={user?.firstName} lastName={user?.lastName} classNames={['icon__md', 'pointer']} />
      <Info nickName={`${user?.firstName} ${user?.lastName}`} status={user?.emailId} />
      <button title='Create Group Chat' className='create-group-btn' onClick={showCreateGroupHandler}><IoCreateOutline />Create Group</button>
    </div>
  )
}

export default UserInfo