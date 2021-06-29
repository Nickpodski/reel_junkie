import { getRunTime } from "./API";
import axios from 'axios';

export const updateUserRuntime = async (data) => {
  console.log(data);
  const email = data.email;
  const userData = data;
  const userMW = data.movies_watched;
  if (userMW.length > 0) {
     let checkRuntime = userMW.filter(e => e['movie_runtime']);
    if (checkRuntime.length > 0) {
      return null;
    } else {
      userMW.map(async (item, index) => {
        let movieRunTime = item.movie_runtime;
        if (!movieRunTime) {
          const newRunTime = await getRunTime(item.movie_id);
          userMW[index].movie_runtime = newRunTime;
        }
      });
      const moviesWatched = userMW;
      axios.put('/api/user/addmoviewatched', { email, moviesWatched })
        .then(() => {
          console.log(moviesWatched);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data.message);
          } else if (error.request) {
            console.log('Server connection Issue!');
          } else {
            console.log(error.message);
          }
        });
      return userData;
    }
  } else {
    return null;
  }
}