import React from 'react'
import Icon from '../Icon'
import {MdDelete} from 'react-icons/md'

const GroupInfo = ({firstName, lastName, isAdmin}) => {
  return (
    <div className='group-info__container'>
      <Icon firstName={firstName} lastName={lastName} classNames={['icon__md']} />
      {/* <h5 className='group-name'>{`${firstName} ${lastName}`}<MdDelete className='add-user-icon' /></h5> */}
      {isAdmin ? <h5 className='group-name'>{`${firstName} ${lastName}`}</h5> : <h5 className='group-name'>{`${firstName} ${lastName}`}<MdDelete className='add-user-icon' /></h5>}
      {!isAdmin && <p className='group-members-count'>(6 Members)</p>}
    </div>
  )
}

export default GroupInfo