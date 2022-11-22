const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thoughts');
const Thought = require('./Thoughts');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //Must match a valid email address (look into Mongoose's matching validation)
    },
    thoughts: [Thought],
    friends: [User],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create a virtual property `friendCount` that gets the amount of friends per user
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
