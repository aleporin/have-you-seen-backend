const { Movie, users } = require('../models')

const CreateMovie = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const createdMovie = await Movie.create({
      title: req.body.title,
      description: req.body.description,
      source: req.body.source,
      watched: req.body.watched,
      image: req.body.image,
      userId: userId
    })
    res.send(createdMovie)
  } catch (e) {
    throw e
  }
}

const GetUserMovies = async (req, res) => {
  try {
    const movie = await Movie.findAll({
      where: { userId: req.params.user_id },
      include: {
        model: users,
        as: 'new_movie',
        attributes: ['username']
      }
    })
    res.send(movie)
  } catch (e) {
    throw e
  }
}

const DeleteMovie = async (req, res) => {
  try {
    await Movie.destroy({
      where: { id: req.params.MovieId }
    })
    res.send({
      msg: 'Movie Has Been Deleted!',
      payload: req.params.MovieId,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateMovie,
  GetUserMovies,
  DeleteMovie
}
