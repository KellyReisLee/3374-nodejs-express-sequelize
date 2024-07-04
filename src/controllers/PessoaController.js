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
  // Posso criar métodos aqui também:
  async getMatriculas(req, res) {
    const { estudantId } = req.params;
    try {
      const matriculaList = await pessoaServices.getStudentMatriculas(Number(estudantId));
      res.status(200).json(matriculaList)
    } catch (error) {
      console.log(error);
    }
  }

  // Retorna a quantidade de matrículas relacionadas a essa id.
  async getMatriculasCountById(req, res) {
    const { estudantId } = req.params;
    try {
      const matriculaList = await pessoaServices.getCountMatriculas(Number(estudantId));
      res.status(200).json(matriculaList)
    } catch (error) {
      console.log(error);
    }
  }


  //Criar nova matrícula para usúário específico:
  async addMatricula(req, res) {
    const { estudantId } = req.params;
    const data = req.body;
    try {
      const matriculaList = await pessoaServices.postMatriculaUser(Number(estudantId), data);
      res.status(200).json(matriculaList)
    } catch (error) {
      console.log(error);
    }
  }





}

//console.log(pessoaServices)

module.exports = PessoaController