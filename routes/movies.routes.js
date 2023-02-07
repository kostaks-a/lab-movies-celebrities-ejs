const router = require('express').Router();

const Movie = require('../models/Movie.model');


router.get('/create', async (req , res , next) =>{
    res.render('movies/new-movie')
});

router.post('/create', async (req, res) => {
    try {
        const body = req.body;
        const newMovie = await Movie.create(body);
        console.log(newMovie);
        res.redirect('/movies');
    } catch (error) {
        res.render('celebrities/new-movie')

    }
  })

  router.get('/', async (req, res) => {
    try {
      const allMovies = await Movie.find()
      console.log('All celebrities :', allMovies)
      res.render('movies/movies', {moviesArray : allMovies })
    } catch (error) {
      console.log('Route to all movies', error)
    }
  })


module.exports = router;

