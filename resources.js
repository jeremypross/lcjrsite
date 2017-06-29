const router = require('express').Router();

router.use('/users', require('./controllers/users'));

// router.use('/posts', require('./controllers/posts'));

module.exports = router;
