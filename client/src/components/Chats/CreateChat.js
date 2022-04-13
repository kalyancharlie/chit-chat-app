import React from 'react'

const CreateChat = () => {
  return (
    <div>
      <h3>CreateChat</h3>
      <label htmlFor="">GroupName</label>
      <input type="text" placeholder='Enter group name' />
      <span><small>Already Exists</small>!</span>
      <button>Create Group</button>
    </div>
  )
}

export default CreateChat