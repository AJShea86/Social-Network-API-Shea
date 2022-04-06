const { Schema, model } = require("mongoose"); //taken from lesson 21

const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema( //does this need to be mongoose.schema()?
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      getters: true
    },
    userName: [
      {
        type: String,
        required: true,
      },
    ],
  
    reactions: [reactionSchema],
    // Array of nested documents created with the reactionSchema
  },
  {
    toJSON: {
      virtuals: true, //taken from lesson 21
    },
    id: false,
  },
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

model.exports = Thought;
