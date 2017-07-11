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

controller.show = (req, res) => {
  Post
    .findByUserId(req.params.id)
    .then((data) => {
      res.json({ posts: data })
      console.log("DATA in CONTrOLLer", data)
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}

controller.destroy = (req, res) => {
  Post
    .delete(req.params.id, req.params.user_id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('ERROR', err);
    })
}



module.exports = controller;
