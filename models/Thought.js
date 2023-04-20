const {Schema, model} = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionText: {
            type: String,
            require: true,
            maxlength: 280
        },
        username: {
            type: String,
            require: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

reactionSchema.virtual('formattedCreatedAt').get(function() {
    return this.createdAt.toLocaleString(); // Format timestamp however you like
  });

// Thought schema definition
const thoughtSchema = new mongoose.Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      username: {
        type: String,
        required: true
      },
      reactions: [reactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      }
    }
  );
  
  thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  
  thoughtSchema.virtual('formattedCreatedAt').get(function() {
    return this.createdAt.toLocaleString(); // Format timestamp however you like
  });

  const Thought = model('Thought', thoughtSchema);

  module.exports = Thought