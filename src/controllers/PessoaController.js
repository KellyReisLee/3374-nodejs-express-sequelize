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
  async getMatriculasAtivas(req, res) {
    const { estudante_id } = req.params;
    try {
      const matriculaList = await pessoaServices.getStudentMatriculasAtivas(Number(estudante_id));
      res.status(200).json(matriculaList)
    } catch (error) {
      return res.status(500).json({ erro: error.message })
    }
  }

  async getAllMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const matriculaList = await pessoaServices.getStudentMatriculasAll(Number(estudante_id));
      res.status(200).json(matriculaList)
    } catch (error) {
      return res.status(500).json({ erro: error.message })
    }
  }

  async getAllPessoasScope(req, res) {
    try {
      const listAdd = await pessoaServices.getAllScope();
      res.status(200).json(listAdd)
    } catch (error) {
      return res.status(500).json({ erro: error.message })
    }

  }

  // Retorna a quantidade de matrículas relacionadas a essa id.
  async getMatriculasCountById(req, res) {
    const { estudante_id } = req.params;
    try {
      const matriculaList = await pessoaServices.getCountMatriculas(Number(estudante_id));
      res.status(200).json(matriculaList)
    } catch (error) {
      return res.status(500).json({ erro: error.message })
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
      return res.status(500).json({ erro: error.message })
    }
  }

  // Cancelar o registro de uma pessoa se ela for deletada.
  async cancelRegisterPessoa(req, res) {
    const { estudante_id } = req.params;
    try {
      await pessoaServices.cancelPessoaMatriculas(Number(estudante_id))
      return res.status(200).json({ message: `matrículas ref.estudante ${estudante_id} canceladas.` })
    } catch (error) {
      return res.status(500).json({ erro: error.message })
    }
  }



}

//console.log(pessoaServices)

module.exports = PessoaController