
const { Schema, Types } = require('mongoose');




const reactionSchema = new Schema(
    {
      reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
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
        getters: true
      },
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  module.exports = reactionSchema;