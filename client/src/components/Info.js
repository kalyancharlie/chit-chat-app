import React from 'react'

const Info = ({nickName, status}) => {
  return (
    <div className='info__container'>
      <h5 className='info__user-name'>{nickName}</h5>
      <p className='info__user-status'>{status}</p>
    </div>
  )
}

export default Info