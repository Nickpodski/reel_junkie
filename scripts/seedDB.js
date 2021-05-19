// node scripts/seedDB.js
const mongoose = require("mongoose");
const db = require("../models");

// CHANGE!

// // This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reelJunkiesDB"
);

 const userSeed = [
  {
    email: "rambo@hotmail.com",
  password: "12345",
  movies_watched: [
    {
      title: "Rambo",
      movie_id: 7555,
      movie_runtime:99,
      movie_genres:[28, 53] 
    },
    {
      title: "Rambo: Last Blood",
      movie_id: 522938,
      movie_runtime:99,
      movie_genres:[28, 53, 18] 
    
    }
  ],

  watchlist: [
    {
      title:"Rambo III",
      movie_id: 1370,
      movie_runtime:99,
      movie_genres:[28, 12, 53, 10752]
      }
  ],
  user_badges: [
    {
      genre_id: [28, 12, 53, 18, 10752,]
    },
  ],
  // timestamps: true
}];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
