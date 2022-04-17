import React from 'react'
import Icon from '../Icon'
import useAppContext from '../../hooks/useAppContext'

const ProfileInfo = () => {
  const {user} = useAppContext()
  return (
    <div className='group-info__container'>
      <Icon firstName={user?.firstName} lastName={user?.lastName} classNames={['icon__md']} />
      <h5 className='group-name'>{`${user?.firstName} ${user?.lastName}`}</h5> 
    </div>
  )
}

export default ProfileInfo