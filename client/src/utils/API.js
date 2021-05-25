import axios from 'axios';

const apiKey = 'fafb5b009fd0d2f53ec2dcd9a2989f8c';
const url = 'https://api.themoviedb.org/3';
const nowPlayingURl = `${url}/movie/now_playing`;
const genreUrl = `${url}/genre/movie/list`; 
const moviesUrl = `${url}/discover/movie`; 
const searchMoviesUrl = `${url}/search/movie`;


// Returns movies that are playing now (Poster + data)
export const moviesPlayingNow = async () => {
  try {
    const { data } = await axios.get(nowPlayingURl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
        include_adult: false
      }
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

export const fetchGenreList = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
        include_adult: false
      }
    })
    const modifiedData = data['genres'].map((g) => ({
      id: g['id'],
      name: g['name']
    }))
    console.log(modifiedData)
    return modifiedData;
    
  } catch(err) {}
}

export const fetchMoviesByGenre = async (genre_id) => {
   try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1,
        with_genres: genre_id,
        include_adult: false
      }

    })
    const posterUrl = "https://image.tmdb.org/t/p/original/"
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularity'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
      name: m['name']
    }))
    return modifiedData;
  } catch(err) {}
}

// will be connected to search bar
export const searchMovies = async (title, page) => {
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
