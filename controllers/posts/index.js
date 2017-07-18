const router     = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);

router.get('/:id', controller.show);

router.get('/:id/edit', controller.edit);

router.put('/:id', controller.update);

router.post('/', controller.create);

router.delete('/:id/:user_id', controller.destroy);

module.exports = router;
