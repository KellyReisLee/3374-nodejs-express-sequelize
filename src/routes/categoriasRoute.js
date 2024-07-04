const { Router } = require('express')

const CategoriaController = require('../controllers/CategoriaController')

// Para executar o método getAll() eu preciso instanciar PessoaController para a partir daí executar esse método na callback function.
const categoriaController = new CategoriaController();

const router = Router();

// Quando essa rota for acionada chame a callback function.
router.get('/categorias', (req, res) => categoriaController.getAll(req, res))
router.get('/categorias/:id', (req, res) => categoriaController.getDataId(req, res))
router.post('/categorias', (req, res) => categoriaController.createData(req, res))
router.put('/categorias/:id', (req, res) => categoriaController.updateData(req, res))
router.delete('/categorias/:id', (req, res) => categoriaController.deleteData(req, res))


module.exports = router;