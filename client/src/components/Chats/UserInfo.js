import React from 'react'
import Icon from '../Icon'
import Info from '../Info'
import {IoCreateOutline} from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'

const UserInfo = () => {
  const {user, setShowProfileSettings} = useAppContext()
  const showProfileHandler = (e) => {
    e.preventDefault()
    setShowProfileSettings(() => true)
  }
  return (
    <div className='userinfo__container' >
      <Icon clickHandler={showProfileHandler}  firstName={user?.firstName} lastName={user?.lastName} classNames={['icon__md', 'pointer']} />
      <Info nickName="Kalyan Charlie" status="Live Life King Size" />
      <button title='Create Group Chat' className='create-group-btn'><IoCreateOutline />Create Group</button>
    </div>
  )
}

export default UserInfo