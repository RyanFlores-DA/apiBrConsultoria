const {Router} = require('express');
const controller = require('./controller');

const router = Router();

//Rotas de lojas
router.get('/', controller.getLojas);
router.post('/', controller.addLojas);
router.get('/:id', controller.getLojasById);
router.delete('/:id', controller.deleteLoja);
router.put('/:id', controller.updateLoja);

module.exports = router;