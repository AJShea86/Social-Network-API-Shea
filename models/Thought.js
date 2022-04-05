const { Schema, model } = require("mongoose"); //taken from lesson 21

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

      // need a getter method to format the timestamp on query
    },
    userName: [
      {
        type: String,
        required: true,
      },
    ],
  
    // reactions: [reactionSchema],
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

const reactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: {}, //Default value is set to a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //Use a getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
      virtuals: true,
      //getters?
    },
    id: false,
  }
);
