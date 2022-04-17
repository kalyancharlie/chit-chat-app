import React, { useEffect } from "react";
import useAppContext from "../../hooks/useAppContext";
import GroupMember from "./GroupMember";
import {getGroupMembers} from '../../api/ChatAPI'

const GroupMembersList = ({groupMembers, setGroupMembers}) => {
  const {activeChat, user} = useAppContext()
  
  // Fetch Group Members
  const fetchGroupMembers = async() => {
    try {
      const resp = await getGroupMembers({senderId: user?._id, chatId: activeChat?._id})
      console.log('resp memebers', resp)
      if(resp?.status && resp?.groupMembersData?.users) {
        setGroupMembers(() => (resp?.groupMembersData?.users))
      }
    } catch(error) {
      console.log('error in fethin membrs')
    }
  }
  useEffect(() => {
    fetchGroupMembers()
  }, [activeChat])
  return (
    <>
      <p className="section-name group-section">Group Members</p>
      <div className="group-members-list__container">
        {groupMembers.map(user => {
          return <GroupMember key={user?._id} {...user} setGroupMembers={setGroupMembers} groupMembers={groupMembers} />
        })}
      </div>
    </>
  );
};

export default GroupMembersList;
