import axios from 'axios';

// Returns movies that are playing now (Poster + data)
export const moviesPlayingNow = async () => {
  try {
    const { data } = await axios.get('/api/movies/moviesnowplaying', {
    })
    const posterUrl = "https://image.tmdb.org/t/p/original/"
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularity'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average']
      
    }))
    return modifiedData;
  } catch(err) {}

}


// will be connected to search bar
export const searchMovies = async (title, page) => {
  const searchMoviesUrl = `/api/movies/searchmovies/${title}/${page}`;
  try {
    const { data } = await axios.get(searchMoviesUrl, {
    })
    const posterUrl = "https://image.tmdb.org/t/p/original/"
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularity'],
      releaseDate: m['release_date'],
      overview: m['overview'],
      rating: m['vote_average'],
      adult: m['adult: false'],
      name: m['name'],
      genres: m['genre_ids'],
      originalLang: m['original_language'],
      voteCount: m['vote_count'],
      voteAvg: m['vote_average']
    }))

    return modifiedData;
  } catch(err) {}
}

export const fetchTotalPages = async (title) => {
  const searchMoviesUrl = `/api/movies/moviestotalpages/${title}`;
  try {
    const { data } = await axios.get(searchMoviesUrl, {
    })
    return data;
  } catch(err) {}
}

export const getRunTime = async (id) => {
  const searchMoviesUrl = `/api/movies/getruntime/${id}`;
  try {
    const { data } = await axios.get(searchMoviesUrl, {
    })
    return data;
  } catch(err) {}
}