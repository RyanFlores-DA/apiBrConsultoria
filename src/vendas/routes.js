const {Router} = require('express');
const controller = require('./controller');

const router = Router();

//Rotas de vendas
router.get('/DataI/', controller.getVendasByDataI);//Listar por dataInicial
router.get('/DataF/', controller.getVendasByDataF);//Listar por dataFinal
router.get('/:id', controller.getVendasById);
router.post('/', controller.addVenda)
router.delete('/:id', controller.deleteVenda);


module.exports = router;