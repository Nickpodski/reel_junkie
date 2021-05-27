// node scripts/seedDB.js
const mongoose = require("mongoose");
const db = require("../models");

// CHANGE!

// // This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reelJunkiesDB"
);

const userSeed = [
  {
    email: "rambo@hotmail.com",
    password: "12345",
    movies_watched: [
      {
        title: "Rambo",
        movie_id: 7555,
        movie_runtime: 99,
        movie_genres: [28, 53],
      },
      {
        title: "Rambo: Last Blood",
        movie_id: 522938,
        movie_runtime: 99,
        movie_genres: [28, 53, 18],
      },
    ],

    watchlist: [
      {
        title: "Rambo III",
        movie_id: 1370,
        movie_runtime: 99,
        movie_genres: [28, 12, 53, 10752],
      },
    ],
    user_badges: [
      {
        genre_id: [28, 12, 53, 18, 28, 28, 10752],
      },
    ],
    // timestamps: true
  },
];

const badgeSeed = [
  {
      badgeName: "Action",
      badge_ID: 28,
      imageName: "" 
  },
  {
      badgeName: "Adventure", 
      badge_ID: 12,
      imageName: "" 
  },
  {
      badgeName: "Animation",
      badge_ID: 16,
      imageName: "" 
  },
  {
      badgeName: "Comedy",
      badge_ID: 35,
      imageName: "" 
  },
  {
      badgeName: "Crime",
      badge_ID: 80,
      imageName: "" 
  },
  {
      badgeName: "Documentary",
      badge_ID: 99,
      imageName: "" 
  },
  {
      badgeName: "Drama",
      badge_ID: 18,
      imageName: "" 
  },
  {
      badgeName: "Family",
      badge_ID: 10751,
      imageName: "" 
  },
  {
      badgeName: "Fantasy",
      badge_ID: 14,
      imageName: "" 
  },
  {
      badgeName: "History",
      badge_ID: 36,
      imageName: "" 
  },
  {
      badgeName: "Horror",
      badge_ID: 27,
      imageName: "" 
  },
  {
      badgeName: "Music",
      badge_ID: 10402,
      imageName: "/public/badges/004-microphone-1.png" 
  },
  {
      badgeName: "Mystery",
      badge_ID: 9648,
      imageName: "" 
  },
  {
      badgeName: "Romance",
      badge_ID: 10749,
      imageName: "/public/badges/019-dove.png" 
  },
  {
      badgeName: "Science Fiction",
      badge_ID: 878,
      imageName: "" 
  },
  {
      badgeName: "TV Movie",
      badge_ID: 10770,
      imageName: "" 
  },
  {
      badgeName: "Thriller",
      badge_ID: 53,
      imageName: "" 
  },
  {
      badgeName: "War",
      badge_ID: 10752,
      imageName: "" 
  },
  {
      badgeName: "Western",
      badge_ID: 37,
      imageName: "" 
  }
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " user records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  db.Badge.deleteMany({})
  .then(() => db.Badge.collection.insertMany(badgeSeed))
  .then((data) => {
    console.log(data.result.n + " badge records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
