const router = require('express').Router()
const MovieRouter = require('./MovieRouter')
const ShowRouter = require('./ShowRouter')

router.use('/movie', MovieRouter)
router.use('/show', ShowRouter)

module.exports = router
