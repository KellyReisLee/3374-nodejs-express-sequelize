const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');
const { Op } = require('sequelize')

const cursoServices = new CursoServices();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async getCourses(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};
    // const where = {
    //   data_inicio: {
    //     [Op.gte]: data,
    //     [Op.lte]: data
    //   }
    // }

    //Se existirem os params, crie uma prop {}
    data_inicial || data_final ? where.data_inicio = {} : null
    //Se existir data inicial, adiciona a prop gte com o valor.
    //Pega todos os registros onde data em data_inicio >= a data_inicial
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
    //Se existir data final, idem
    //Pega todos os registros onde data em data_inicio <= a data_final
    data_final ? where.data_inicio[Op.lte] = data_final : null

    try {
      const coursesList = await cursoServices.getAllSources(where);
      return res.status(200).json(coursesList)

    } catch (error) {
      return res.status(500).json({ erro: error.message })
    }




  }
}

module.exports = CursoController;

