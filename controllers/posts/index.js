const router     = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.create);



module.exports = router;
