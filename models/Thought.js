const { Schema, model } = require("mongoose"); //taken from lesson 21

const thoughtSchema = new mongoose.Schema(
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
        // need a getter method to format the timestamp on query
    },
    userName: [
      {
        type: "string",
        required: true,
    },
    ],
    reactions: [
        // Array of nested documents created with the reactionSchema

    ],
  },
  {
    toJSON: {
      virtuals: true, //taken from lesson 21
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

model.exports = Thought;
