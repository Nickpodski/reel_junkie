const router = require('express').Router();
const User = require('../../models/User');

// Works - gets total number of movies watched
router.get('/amountwatched', (req, res) => {
  User.aggregate([
    {
      $project: {
           _id:1,
        
           movies_watched: {
              $size: {
                  $filter: {
                     input: "$movies_watched",
                     as: "e",
                     cond:{ $gte: [ "$$e.movie_genres", 1 ]}
                  }
              }
           }
  
        }
  }
  ])
    .then((userData) => {
      res.json(userData);
      
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// WORKS!!
router.get("/hourswatched", (req , res) => {
  User.aggregate([
    {
      $addFields: {
        totalHoursWatched: {
          $sum: "$movies_watched.movie_runtime"
        }
      }
    }
  ])
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Works - gives back count for each id
router.get('/badgeidcount/:email', (req, res) => {
  User.aggregate([
      // optionaly filter records to apply on
      {
         $match: { email: req.params.email }
      },
      {
        $project: {
          // project values you want to see in result
          // record id is present by default
          email: "$email",
          genres: {
            // brand new field with desired output
            $reduce: {
              // reduce like Array.reduce in javascript
              input: "$movies_watched",
              // array to reduce
              initialValue: [],
              in: {
                "$concatArrays": // the function doing the magic
                // if you use $concatArrays instead - it will contain duplicities
                [
                  "$$value",
                  // destination in initialValue
                  "$$this.movie_genres"// field to take items from
                  
                ]
              }
            }
          }
        }
      },
      {
        $unwind: "$genres"
      },
      {
        $group: {
          _id: "$genres",
          count: {
            $sum: 1
          }
        }
      }
  ])
  
.then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
});

// Not working yet
router.put("/addMovie/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $push: { movies_watched: req.body } },
    { new: true, runValidators: true }
  )
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;

