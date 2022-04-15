import React from 'react'
import Icon from '../Icon'
import {MdDelete} from 'react-icons/md'

const GroupMember = () => {
  return (
    <div className='group-member__container'>
      <Icon firstName='Kalyan' lastName='Bathula' classNames={['icon__sm', 'search-user-icon']} />
      <p className='search-user__name'>Srihari Bathula</p>
      <MdDelete className='add-user-icon' />
    </div>
  )
}

export default GroupMember