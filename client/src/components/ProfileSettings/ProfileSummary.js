import React from 'react'
import useAppContext from '../../hooks/useAppContext'

function ProfileSummary() {
  const {user} = useAppContext()
  return (
    <div className='profile-summary__container'>
      <div className="profile-item">
        <label htmlFor="" className='profile-item-heading section-name'>Nick Name</label>
        <p className='profile-item-name'>{`${user.firstName} ${user.lastName}`}</p>
      </div>
      <div className="profile-item">
        <label htmlFor="" className='profile-item-heading section-name'>First Name</label>
        <p className='profile-item-name'>{user.firstName}</p>
      </div>
      <div className="profile-item">
        <label htmlFor="" className='profile-item-heading section-name'>Last Name</label>
        <p className='profile-item-name'>{user.lastName}</p>
      </div>
      <div className="profile-item">
        <label htmlFor="" className='profile-item-heading section-name'>Email Id</label>
        <p className='profile-item-name'>{user.emailId}</p>
      </div>
    </div>
  )
}

export default ProfileSummary