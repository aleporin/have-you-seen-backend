const router = require('express').Router()
const controllers = require('../controllers/ShowController')

router.get('/:user_id/watched', controllers.GetUserShows)
router.post('/create/:user_id', controllers.CreateShow)
router.delete('/:user_id/delete/:showId', controllers.DeleteShow)

module.exports = router
