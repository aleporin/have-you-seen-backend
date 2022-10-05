const router = require('express').Router()
const controllers = require('../controllers/ShowController')

router.post('/', controllers.GetUserShows)
router.post('/create/:user_id', controllers.CreateShow)
router.get('/delete/:recipeId', controllers.DeleteShow)

module.exports = router
