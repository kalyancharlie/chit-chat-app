import React from 'react'
import Icon from '../Icon'

const GroupInfo = () => {
  return (
    <div className='group-info__container'>
      <Icon firstName='Youtube DSA' lastName='Discussion' classNames={['icon__md']} />
      <h5 className='group-name'>Youtube DSA Discussion</h5>
      <p className='group-members-count'>(6 Members)</p>
    </div>
  )
}

export default GroupInfo