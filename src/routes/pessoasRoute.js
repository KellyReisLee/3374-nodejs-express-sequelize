const { Router } = require('express')

const PessoaController = require('../controllers/PessoaController')
const MatriculaController = require('../controllers/MatriculaController')

// Para executar o método getAll() eu preciso instanciar PessoaController para a partir daí executar esse método na callback function.
const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

// Quando essa rota for acionada chame a callback function.
router.get('/pessoas', (req, res) => pessoaController.getAll(req, res))
router.get('/pessoas/all', (req, res) => pessoaController.getAllPessoasScope(req, res))
router.get('/pessoas/:id', (req, res) => pessoaController.getDataId(req, res))
router.post('/pessoas', (req, res) => pessoaController.createData(req, res))
router.put('/pessoas/:id', (req, res) => pessoaController.updateData(req, res))
router.delete('/pessoas/:id', (req, res) => pessoaController.deleteData(req, res))


router.get('/pessoas/:estudantId/matriculas', (req, res) => pessoaController.getMatriculas(req, res))
router.get('/pessoas/:estudantId/count', (req, res) => pessoaController.getMatriculasCountById(req, res))
router.post('/pessoas/:estudantId/matriculas', (req, res) => matriculaController.createData(req, res))




module.exports = router;