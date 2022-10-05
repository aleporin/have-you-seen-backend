const router = require('express').Router()
const controllers = require('../controllers/MovieController')

router.get('/:user_id/watched', controllers.GetUserMovies)
router.post('/create/:user_id', controllers.CreateMovie)
router.delete('/:user_id/delete/:showId', controllers.DeleteMovie)

module.exports = router
