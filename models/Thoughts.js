const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      text: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      text: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactionss per thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize the Thought model
const Thought = model('comment', thoughtSchema);

module.exports = thoughtSchema
module.exports = Thought