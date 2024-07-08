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

// Apenas as matrículas - status: 'matriculado'.
router.get('/pessoas/:estudante_id/matriculas', (req, res) => pessoaController.getMatriculasAtivas(req, res))

//Create matrícula:
router.post('/pessoas/:estudante_id/matriculas', (req, res) => matriculaController.createData(req, res))

// Todas as matrículas:
router.get('/pessoas/:estudante_id/matriculas/all', (req, res) => pessoaController.getAllMatriculas(req, res))


//Pega a quantidade de matrículas confirmadas:
router.get('/pessoas/:estudante_id/matriculas/confirmadas', (req, res) => matriculaController.getMatriculasCountById(req, res))

//getFullCourses

// Pega apenas uma matrícula:
router.get('/pessoas/matriculas/full', (req, res) => matriculaController.getFullCourses(req, res))

// Pega apenas uma matrícula:
router.get('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.getDataOne(req, res))



router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.updateData(req, res))
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.deleteData(req, res))




module.exports = router;