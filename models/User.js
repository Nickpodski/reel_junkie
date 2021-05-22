const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
// import { isEmail } from "validator";
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema( {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
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
        movie_runtime: {
          type: Number,
          required: "In minutes"
        },
        movie_genres: [
          {
          type: Array
        }
      ],
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
    ],

    user_badges: [
      {
        genre_id: {
          type: Number,
        },
      },
    ],
    // timestamps: true
});

// $group, $match, $aggregate

UserSchema.pre("save", function (next) {
  let user = this;
  if (!user.isModified("password")) return next();
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
