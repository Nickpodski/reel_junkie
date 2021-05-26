const router = require('express').Router();
const { User, Badge } = require('../../models');
// const withAuth = require('../../utils/auth');

// let possibleBadges = [];
// let ticket = ".public.badges/023-ticket.png"
// ticket = false;
// const testArr28 = [];

// CRUD : Create, Read, Update, Delete
//        Post    Get    Put    Delete

// Works - gets total number of movies watched
router.get('/numwatched', (req, res) => {
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
// (GET)  last workout
// router.get("/badges", (req, res) => {
//   User.aggregate([
//     {
//       movies_watched: {
//         genre_id: {
//           $sum: "$movies_watched.genre_id",
//         },
//       },
//     },
//   ])
//     .then((dbBadge) => {
//       res.json(dbBadge);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// Works - gives back count for each id
router.get('/badgeidcount', (req, res) => {
  User.aggregate([
      // optionaly filter records to apply on
      //{
      //    $match: { email: /rambo/ }
      //             ^  logged in(user's id)
      //},
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
  // something like: select genres.count()
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

// not working yet
// router.post("/addMovie", ({ body }, res) => {
//   User.create({})
//     .then((userData) => {
//       res.json(userData);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// router.get('/getbynum', (req,res) => {
//   User.find({
//     movies_watched: {$elemMatch: {
//     movie_genres:18}}})
// })

// // (PUT)   add badge
// router.put("/badges/:id", (req, res) => {
//   User.findByIdAndUpdate(
//     req.params.id,
//     { $push: { movies_watched: req.body } },
//     { new: true, runValidators: true }
//   )
//     .then((dbBadge) => {
//       res.json(dbBadge);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// OOORRRRR ////////////////////////////////////////////////////////////////////////////////

// // router.post('/', withAuth, async (req, res) => {
// router.post('/', async (req, res) => {
//   try {
//     const newUserSpell = await UserSpell.create({
//       ...req.body,
//       // user_id: req.session.user_id,
//     });
//     res.status(200).json(newUserSpell);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.put('/add/:badgeID',  async (req, res) => {
//   try {
//     const addSpell = await User.findOne({
//       where: {
//         // id: req.params.id,
//         id: req.session.user_id,
//       },
//     });

//     const badgeID = req.params.badgeID;
//     if (!addSpell) {
//       res.status(404).json({ message: 'No user found with this id!' });
//       return;
//     }

//     const badgeSTR = addSpell.usersBadges;
//     if (badgeSTR != null) {
//       if (badgeSTR.includes(parseInt(badgeID))) {
//        res.status(409).json({ message: 'usersBadges already includes this spell for this user!'})
//        return;
//       } else {
//         const badgeIDS = badgeSTR.split(',').map(Number);
//         badgeIDS.push(parseInt(badgeID));
//         const newbadgeIDS = badgeIDS.join();
//         await User.update({ usersBadges: newbadgeIDS }, {
//           where: {
//             id: req.session.user_id,
//           },
//         });
//       }
//     } else {
//       await User.update({ usersBadges: badgeID }, {
//         where: {
//           id: req.session.user_id,
//         },
//       });
//     }

//     const updatedUser = await User.findOne({
//       where: {
//         id: req.session.user_id,
//       },
//     });
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.put('/remove/:badgeID', async (req, res) => {
//   try {
//     const deleteBadge = await User.findOne({
//       where: {
        // id: req.params.id,
//         id: req.session.user_id,
//       },
//     });
//     if (!deleteBadge) {
//       res.status(404).json({ message: 'No user found with this id!' });
//       return;
//     }
//     const badgeSTR = deleteBadge.usersBadges;
//     if (badgeSTR == null) {
//       res.status(404).json({ message: 'No usersBadges found with this user id!' })
//       return;
//     }
//     const badgeID = req.params.badgeID;
//     const badgeIDS = badgeSTR.split(',').map(Number);
//     const index = badgeIDS.indexOf(parseInt(badgeID));
//     if (index > -1) {
//       badgeIDS.splice(index, 1);
//     } else {
//       res.status(404).json({ message: `This spell doesn't exist in this user's usersBadges!` });
//       return;
//     }
//     const newbadgeIDS = badgeIDS.join();
//     await User.update({ usersBadges: newbadgeIDS }, {
//       where: {
//         id: req.session.user_id,
//       },
//     });
//     const updatedUser = await User.findOne({
//       where: {
//         id: req.session.user_id,
//       },
//     });
//     res.status(200).json(updatedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

