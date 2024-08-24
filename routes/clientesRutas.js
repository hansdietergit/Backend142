const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/',clienteController.agregarClientes);
router.get('/',clienteController.mostrarClientes);
router.get('/:id',clienteController.buscarClientes);
router.put('/:id',clienteController.modificarClientes);
router.patch('/:id',clienteController.editarClientes);
router.delete('/:id',clienteController.borrarClientes);

module.exports = router;