import React, { useEffect, useState } from "react";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";
import ScrollableFeed from "react-scrollable-feed";
import { getChatMessages } from "../../api/ChatAPI";
import useAppContext from "../../hooks/useAppContext";
import io from "socket.io-client";

const SOCKET_ENDPOINT = process.env.REACT_APP_SOCKETIO_SERVER;
var socket, previouChat;

const ChatArea = () => {
  const { activeChat, user } = useAppContext();
  const [chatMessages, setChatMessages] = useState([]);
  // SOCKET CONNECTION SETUP

  // Get Chat Messages
  const fetchChatMessages = async () => {
    try {
      const resp = await getChatMessages({ chatId: activeChat?._id });
      if (resp?.status && resp?.messagesData) {
        const { messagesData } = resp;
        console.log("success in mgs");
        console.log("fetch msg rsp");
        setChatMessages(() => messagesData);
      }
      socket?.emit("JOIN_CHAT", activeChat?._id);
    } catch (error) {
      console.log("error in g etting messages");
      console.log(error);
    }
  };

  useEffect(() => {
    if (!activeChat) return;
    previouChat = activeChat;
    fetchChatMessages();
  }, [activeChat]);

  useEffect(() => {
    socket = io(SOCKET_ENDPOINT);
    socket.emit("CONNECTED_TO_SOCKET", user);
  }, [user]);

  // SOCKET LISTENER
  useEffect(() => {
    socket.on("RECEIVED_MESSAGE", (messageObj) => {
      console.log("NEW MESSAGE RECEIVED", messageObj);
      if (
        !previouChat || // if chat is not selected or doesn't match current chat
        previouChat._id !== messageObj.chat._id
      ) {
      } else {
        console.log("NEW MESSAGE RECEIVED", messageObj);
        setChatMessages([...chatMessages, messageObj]);
      }
    });
  });

  useEffect(() => {
    const ele = document.getElementById("scrollDiv");
    ele.scrollTop = ele.scrollHeight
  }, [chatMessages]);

  return (
    <>
      <div className="chat-area__container" id="scrollDiv">
        <MessageList chatMessages={chatMessages} />
      </div>
      <SendMessage
        socket={socket}
        setChatMessages={setChatMessages}
        chatMessages={chatMessages}
      />
    </>
  );
};

export default ChatArea;
