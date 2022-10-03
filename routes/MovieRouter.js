const router = require('express').Router()
const controllers = require('../controllers/MovieController')

router.post('/', controllers.GetUserMovies)
router.post('/create/:user_id', controllers.CreateMovie)
router.get('/delete/:recipeId', controllers.DeleteMovie)
