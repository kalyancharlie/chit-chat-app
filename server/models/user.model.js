const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    firstName: { type: "String", trim: true, required: true },
    lastName: { type: "String", trim: true, required: true },
    emailId: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Password Encrypting
UserSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.index({firstName: 'text', lastName: 'text', emailId: 'text'})

const User = mongoose.model("User", UserSchema);

module.exports = User;
