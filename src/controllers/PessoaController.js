// Aqui vamos pegar o file index.js. de Controller.
// executa todo o codigo que está em index, traz todos os metódos referentes aos models criados nessa pasta.
//const database = require('../models')

const Controller = require("./Controller");
const PessoaService = require('../services/PessoaService');


// Aqui estou criando uma nova instância da class 'PessoaService' e armazenando ela dentro da variavel 'pessoasServices'
const pessoaServices = new PessoaService();

//Estou passando a nova instancia como parâmetro no PessoaController.
// Porque pessoaController recebe como parâmetro uma instância de objeto que será usada para acessar os dados do modelo 'Pessoa'.
class PessoaController extends Controller {
  constructor() {
    super(pessoaServices)
  }
}

//console.log(pessoaServices)

module.exports = PessoaController