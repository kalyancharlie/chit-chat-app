import React from 'react'
import Icon from '../Icon'

const GroupMember = () => {
  return (
    <div className='group-member__container'>
      <Icon firstName='Kalyan' lastName='Bathula' classNames={['icon__sm', 'search-user-icon']} />
      <p>Srihari Bathula</p>
    </div>
  )
}

export default GroupMember