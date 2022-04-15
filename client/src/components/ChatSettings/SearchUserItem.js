import React from 'react'
import Icon from '../Icon'
import {FaUserPlus} from 'react-icons/fa'

const SearchUserItem = () => {
  return (
    <div className='search-user-item__container'>
      <Icon firstName='Kalyan' lastName='Bathula' classNames={['icon__sm', 'search-user-icon']} />
      <p className='search-user__name'>Srihari Bathula</p>
      <FaUserPlus className='add-user-icon' title='Add User' />
    </div>
  )
}

export default SearchUserItem