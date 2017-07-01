const Post = require('../../models/Post');
const controller = {};

controller.index = (req, res) => {
  Post
    .findAll()
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}

controller.create = (req, res) => {
  Post
    .create(req.body.post)
    .then((data) => {
      // res.status(201)
      res.json({ post: data })
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}

module.exports = controller;
