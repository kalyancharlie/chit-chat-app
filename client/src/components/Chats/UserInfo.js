import React from 'react'
import Icon from '../Icon'
import Info from '../Info'
import {IoCreateOutline} from 'react-icons/io5'

const UserInfo = () => {
  return (
    <div className='userinfo__container'>
      <Icon firstName='Kalyan' lastName='Bathula' classNames={['icon__md']} />
      <Info nickName="Kalyan Charlie" status="Live Life King Size" />
      <button title='Create Group Chat' className='create-group-btn'><IoCreateOutline />Create Group</button>
    </div>
  )
}

export default UserInfo