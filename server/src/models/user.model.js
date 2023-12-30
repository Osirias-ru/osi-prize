const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('@config/roles');

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    username: {
        type: String,
        required: true,
    },
    photo_url: {
        type: String,
        required: true,
    },
    role: {
      type: String,
      enum: roles,
      default: 'user',
    },
  }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
