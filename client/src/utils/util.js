import moment from 'moment'
export const getIconLetters = (firstName = "", lastName = "") => {
  let letters = "";
  if (firstName.length >= 1) letters = firstName[0].toUpperCase();
  if (lastName.length >= 1) letters += lastName[0].toUpperCase();
  return letters;
};

export const getFirstAndLastName = (fullName = "") => {
  const words = fullName.split(" ");
  if (words.length === 0) return ["", ""];
  if (words.length === 1) return [words[0], ""];
  return [words[0], words[words.length - 1]]
};

export const getChatTime = (date) => {
  return moment(date).startOf('day').fromNow(); 
}

export const isUserAlreadyInChat = (targetUserId="", usersList=[]) => {
  const results = usersList.filter(user => {
    if (!user?.isGroupChat) {
      const {users} = user
      if (users[0]?._id === targetUserId || users[1]?._id === targetUserId) {
        return true
      }
    }
    return false
  })
  console.log('target id' + targetUserId)
  console.log('results', results)
  console.log('users', usersList)
  return results.length === 1 ? true : false
}

export const getChatIdsFromChats = (chatIdsList=[]) => {
  const results = chatIdsList.filter(chat => !chat.isGroupChat).reduce((prevList, currChat) => {
    const one = currChat?.users[0]?._d
    const two = currChat?.users[1]?._id
    if (!prevList.includes(one)) prevList.push(one)
    if (!prevList.includes(two)) prevList.push(two)
    return prevList
  }, [])
  return results
}

export const getMatchingUsers = (searchResultsList=[], existingUsers=[]) => {
  return searchResultsList.filter(user => !existingUsers.includes(user?._id))
}

export const getUserNameFromChatObj = (chatObj, userId) => {
  const one = chatObj?.users[0]
  const two = chatObj?.users[1]
  console.log('users data')
  if (one?._id !== userId) {
    return one?.firstName + ' ' + one?.lastName
  } else  {
    return two?.firstName + ' ' + two?.lastName
  }
}

export const isGroupAdmin = (groupObj, userId) => {
  return groupObj?.groupAdmin?._id === userId
}

export const getObjById = (obj, userId) => {
  return obj?.find(user => user._id === userId)
}