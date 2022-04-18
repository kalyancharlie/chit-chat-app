const { app } = require('./app')
const log = require('./utils/logger')

const PORT = process.env.PORT || 3030

const server = app.listen(PORT, () => {
    log("App listening on http://localhost:3030")
})

// Socket Connection Server
const io = require("socket.io")(server, {
    pingTimeout: 40000,
    cors: {
      origin: "*",
      // credentials: true,
    },
  });

io.on("connection", (socket) => {
    console.log("Connected to socket.io Server");
    // ADD USER TO SOCKET
    socket.on("CONNECTED_TO_SOCKET", (user) => {
      // console.log(user)
      socket.join(user?._id);
      socket.emit("CONNECTED", null);
      console.log("User Joined:" + user._id)
    });
  
    socket.on("JOIN_CHAT", (room) => {
      socket.join(room);
      console.log("User Joined Room: " + room);
    });
  
    socket.on("SEND_MESSAGE", (chatObj) => {
      // console.log('chat data received', chatObj)
      // console.log( chatObj)
      if (!chatObj?.chat?.users) return console.log("No users Found");
  
      chatObj?.chat?.users.forEach((user) => {
        if (user?._id === chatObj?.sender?._id) return;
        console.log("Sending message to: " + user?._id);
        socket.in(user._id).emit("RECEIVED_MESSAGE", chatObj);
      });
    });
  
    socket.off("CONNECTED_TO_SOCKET", () => {
      console.log("USER DISCONNECTED");
      socket.leave(userData._id);
    });
  });