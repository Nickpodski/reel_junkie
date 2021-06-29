const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
// import { isEmail } from "validator";
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    // validate: { validator: isEmail, message: "Invalid email." },
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true
  },

  movies_watched: [
    {
      title: {
        type: String,
      },
      movie_id: {
        type: Number,
      },
   
      movie_genres: [
        {
          type: Array
        }
      ],
      poster: {
        type: String,
      },
      movie_runtime: {
        type: Number
      },
    },
  ],

  watchlist: [
    {
      title: {
        type: String,
      },
      movie_id: {
        type: Number,
      },
    },
  ]
});

// $group, $match, $aggregate

UserSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
