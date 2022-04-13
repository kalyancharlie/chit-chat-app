import React from 'react'
import Icon from '../Icon'
import Info from '../Info'

const UserInfo = () => {
  return (
    <div className='userinfo__container'>
      <Icon firstName='Kalyan' lastName='Bathula' classNames={['icon__md']} />
      <Info nickName="Kalyan Charlie" status="Live Life King Size" />
    </div>
  )
}

export default UserInfo