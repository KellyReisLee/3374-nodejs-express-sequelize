// Aqui vamos pegar o file index.js.
// executa todo o codigo que está em index, traz todos os metódos referentes aos models criados criados nessa pasta.
const database = require('../models')

class PessoaController {
  static async getAll(req, res) {

    try {
      const listaDePessoas = await database.Pessoa.findAll();
      return res.status(200).json(listaDePessoas)
    } catch (error) {
      //error
    }
  }
}

module.exports = PessoaController