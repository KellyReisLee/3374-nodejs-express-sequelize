const { Router } = require('express');
const CursoController = require('../controllers/CursoController');

const cursoController = new CursoController();

const router = Router();
router.get('/cursos', (req, res) => cursoController.getAll(req, res))
router.get('/cursos/:id', (req, res) => cursoController.getDataId(req, res))
router.post('/cursos', (req, res) => cursoController.createData(req, res))
router.put('/cursos/:id', (req, res) => cursoController.updateData(req, res))
router.delete('/cursos/:id', (req, res) => cursoController.deleteData(req, res))
module.exports = router;