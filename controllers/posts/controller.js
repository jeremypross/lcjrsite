const Post = require('../../models/Post');
const controller = {};

controller.index = (req, res) => {
  Post
    .findAll()
    .then((data) => {
      res.json(200)
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}

controller.create = (req, res) => {
  Post
    .create(req.body.user)
    .then((data) => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}

module.exports = controller;
