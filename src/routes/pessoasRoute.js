const { Router } = require('express')

const PessoaController = require('../controllers/PessoaController')

// Para executar o método getAll() eu preciso instanciar PessoaController para a partir daí executar esse método na callback function.
const pessoaController = new PessoaController();

const router = Router();

// Quando essa rota for acionada chame a callback function.
router.get('/pessoas', (req, res) => pessoaController.getAll(req, res))

module.exports = router;