const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema(
  {
    chatName: { type: String, trim: true, required: true },
    isGroupChat: { type: Boolean, default: false, required: true },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User", },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
