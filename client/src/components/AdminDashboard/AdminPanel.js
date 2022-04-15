import React from 'react'
import Search from '../Search'
import AdminSearchResults from './AdminSearchResults'
import {FaUserPlus} from 'react-icons/fa'

const AdminPanel = () => {
  return (
    <div className='admin-panel__container'>
      <div className="admin-panel__header">
        <Search />
        <button className='admin-add-user-btn btn-reset' title='Click to Add User'><FaUserPlus className="admin-add-user-icon" />Add User</button>
      </div>
      <AdminSearchResults />
    </div>
  )
}

export default AdminPanel