const router = require('express').Router();
const API = require('../../utils/API');

router.get('/moviesnowplaying', async (req, res) => {
  try{
    const data = await API.moviesPlayingNow();
    res.status(200).json(data);
  } catch(err) {
    res.status().json({ message: err.message})
  }
});

router.get('/searchmovies/:title/:page', async (req, res) => {
  const title = req.params.title;
  const page = req.params.page;
  try{
    const data = await API.searchMovies(title, page);
    res.status(200).json(data);
  } catch(err) {
    res.status().json({ message: err.message})
  }
});

router.get('/moviestotalpages/:title', async (req, res) => {
  const title = req.params.title;
  try{
    const data = await API.fetchTotalPages(title);
    res.status(200).json(data);
  } catch(err) {
    res.status().json({ message: err.message})
  }
});

router.get('/getruntime/:id', async (req, res) => {
  const id = req.params.id;
  try{
    const data = await API.getRuntime(id);
    res.status(200).json(data);
  } catch(err) {
    res.status().json({ message: err.message})
  }
});


module.exports = router;