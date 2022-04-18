import React, {useState} from 'react'
import './ChatSettings.css'
import GroupInfo from './GroupInfo'
import SearchUser from './SearchUser'
import GroupMembersList from './GroupMembersList'
import {useNavigate} from 'react-router-dom'
import useAppContext from '../../hooks/useAppContext'
import { BsArrowLeft } from 'react-icons/bs'

const ChatSettings = () => {
  const navigator = useNavigate()
  const {activeChat} = useAppContext()
  const [groupMembers, setGroupMembers] = useState([])

  return (
    <div className='chat-settings__container'>
      <div>
      <BsArrowLeft className="arrow-icon nav-icon-left nav-icon-abs " title="Go back" onClick={(e) => {
        e.preventDefault()
        navigator(`/chats/${activeChat?._id}`)
      }} />
      </div>
      {/* {isMobileView ? <button className='logout-btn' title='Click to Logout' onClick={logoutHandler}><FiLogOut /><span>Logout</span></button>: <></>}  */}
      <div className='chat-settings-main__container'>
        <GroupInfo />
        {activeChat?.isGroupChat && <SearchUser groupMembers={groupMembers} setGroupMembers={setGroupMembers} />}
        <GroupMembersList groupMembers={groupMembers} setGroupMembers={setGroupMembers} />
      </div>
    </div>
  )
}

export default ChatSettings