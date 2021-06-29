import { getRunTime } from "./API";
import axios from 'axios';

export const updateUserRuntime = async (data) => {
  console.log(data);
  const email = data.email;
  const userData = data;
  const userMW = data.movies_watched;
  let newUser = false;
  if (!userMW.movie_runtime) {
    const updatedData = await userMW.map(item => {
      let movieRunTime = item.movie_runtime;
      if (!movieRunTime) {
        const newRunTime = getRunTime(item.id);
        console.log(newRunTime);
        movieRunTime = newRunTime;
        newUser = true;
      } 
    });
    console.log(updatedData);
  }
  // if (newUser === true) {
  //   userData.movies_watched = updatedUserMW;
  //   axios.put('/api/user/addmoviewatched', { email, updatedUserMW })
  //         .then(res => {
  //           console.log('Updated!');
  //         })
  //         .catch((error) => {
  //           if (error.response) {
  //             console.log(error.response.data.message);
  //           } else if (error.request) {
  //             console.log('Server connection Issue!');
  //           } else {
  //             console.log(error.message);
  //           }
  //         })
  //   return userData;
  // } else {
  //   return null;
  // }
}