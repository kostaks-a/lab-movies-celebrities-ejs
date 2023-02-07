const Celebrity = require('../models/Celebrity.model');

const router = require('express').Router();




router.get('/create', async (req , res , next) =>{
    res.render('celebrities/new-celebrity')
});


router.post('/create', async (req, res) => {
    try {
        const body = req.body;
        const newCelebrity = await Celebrity.create(body);
        console.log(newCelebrity);
        res.redirect('/celebrities')
    } catch (error) {
        res.render('celebrities/new-celebrity')

    }
  })

  router.get('/', async (req, res) => {
    try {
      const allCelebrities = await Celebrity.find()
      console.log('All celebrities :', allCelebrities)
      res.render('celebrities/celebrities', {celebsArray : allCelebrities })
    } catch (error) {
      console.log('Route to all celebrities', error)
    }
  })

module.exports = router;