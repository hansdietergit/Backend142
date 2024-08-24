const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.post('/',productoController.agregarProductos);
router.get('/',productoController.mostrarProductos);
router.get('/:id',productoController.buscarProductos);
router.put('/:id',productoController.modificarProductos);
router.patch('/:id',productoController.editarProductos);
router.delete('/:id',productoController.borrarProductos);

module.exports = router;