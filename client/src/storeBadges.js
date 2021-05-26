// function workoutNames(data) {
//     let workouts = [];
  
//     data.forEach((workout) => {
//       workout.exercises.forEach((exercise) => {
//         workouts.push(exercise.name);
//       });
//     });
  
//     // return de-duplicated array with JavaScript `Set` object
//     return [...new Set(workouts)];
//   }
// API.getWorkoutsInRange().then(populateChart);
//   ^^^  get all workout data from back-end
// import badgeAPI from "routes/api/badgeAPI.js";
// import router from "routes/api/badgeAPI.js";
// const router = require('express').Router();
// const { User, Badge } = require('../../models');
// // import mongoose from "mongoose"

// function showTicket() {
//     if(User.genres.count === 10){
       
//             console.log("here's your ticket")
//     } else {
//         console.log("no ticket here")
//     }
// }

// showTicket(); 
import React, { useState } from 'react';
import User from "models/User.js";

const initialState = {
    user: User.email
}

let addMovieBtn = document.querySelector("");

function addMovie(){
    (addMovieBtn).on('click', function(e){
        console.log("BeepBoop")
        e.preventDefault();
    })
}
addMovie();