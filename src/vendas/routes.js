const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getLojas);
router.get('/:id', controller.getLojasById);

module.exports = router;