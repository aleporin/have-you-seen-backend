const { Show, users } = require('../models')

const CreateShow = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const createdShow = await Show.create({
      title: req.body.title,
      description: req.body.description,
      source: req.body.source,
      watched: req.body.watched,
      image: req.body.image,
      userId: userId
    })
    res.send(createdShow)
  } catch (e) {
    throw e
  }
}

const GetUserShows = async (req, res) => {
  try {
    const show = await Show.findAll({
      where: { userId: req.params.user_id },
      include: {
        model: users,
        as: 'new_show',
        attributes: ['username']
      }
    })
    res.send(show)
  } catch (e) {
    throw e
  }
}

const DeleteShow = async (req, res) => {
  try {
    await Show.destroy({
      where: { id: req.params.showId }
    })
    res.send({
      msg: 'Show Has Been Deleted!',
      payload: req.params.showId,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateShow,
  GetUserShows,
  DeleteShow
}
