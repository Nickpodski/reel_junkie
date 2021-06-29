const axios = require('axios');
const apiKey = process.env.TMBAPI_KEY;
const url = 'https://api.themoviedb.org/3';
const nowPlayingURl = `${url}/movie/now_playing`;
const searchMoviesUrl = `${url}/search/movie`;


// Returns movies that are playing now (Poster + data)
const moviesPlayingNow = async () => {
  try {
    const { data } = await axios.get(nowPlayingURl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
        include_adult: false
      }
    })
    return data;
  } catch(err) {}

}

// will be connected to search bar
const searchMovies = async (title, page) => {
  try {
    const { data } = await axios.get(searchMoviesUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        include_adult: false,
        query:title,
        page: page
      }

    })
    return data;
  } catch(err) {}
}

const fetchTotalPages = async (title) => {
  try {
    const { data } = await axios.get(searchMoviesUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        include_adult: false,
        query:title
      }
    })
    return data.total_pages;
  } catch(err) {}
}

const getRuntime = async (movie_id) => {
  const runtimeURL = `${url}/movie/${movie_id}`;
  try {
    const { data } = await axios.get(runtimeURL, {
      params: {
        api_key: apiKey,
        language: 'en_US',
      }
    })
    const runTime = data.runtime;
    return runTime;
  } catch(err) {}
}

exports.getRuntime = getRuntime;
exports.searchMovies = searchMovies;
exports.moviesPlayingNow = moviesPlayingNow;
exports.fetchTotalPages = fetchTotalPages;
