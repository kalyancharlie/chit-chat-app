import React from 'react'

function ProfileSummary() {
  return (
    <div className='profile-summary__container'>
      <div className="profile-item">
        <label htmlFor="" className='profile-item-heading section-name'>Nick Name</label>
        <p className='profile-item-name'>Kalyan Bathula</p>
      </div>
      <div className="profile-item">
        <label htmlFor="" className='profile-item-heading section-name'>First Name</label>
        <p className='profile-item-name'>Kalyan Chinna</p>
      </div>
      <div className="profile-item">
        <label htmlFor="" className='profile-item-heading section-name'>Last Name</label>
        <p className='profile-item-name'>Bathula</p>
      </div>
      <div className="profile-item">
        <label htmlFor="" className='profile-item-heading section-name'>Email Id</label>
        <p className='profile-item-name'>kalyancharlie@gmail.com</p>
      </div>
    </div>
  )
}

export default ProfileSummary