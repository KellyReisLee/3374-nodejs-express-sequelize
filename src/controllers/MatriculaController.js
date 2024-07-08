const Controller = require("./Controller");
const MatriculaService = require('../services/MatriculaServices');
const Sequelize = require('sequelize')


const matriculaServices = new MatriculaService();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices)
  }

  // retorna a quantidade de matrículas que esse usuário tem.
  async getMatriculasCountById(req, res) {
    const { estudante_id } = req.params;
    try {
      const matriculaList = await matriculaServices.findAndCountMatriculas({
        where: {
          estudante_id: Number(estudante_id),
          status: 'matriculado'
        },
        limit: 3,
        order: [
          ['id', 'DESC']
        ]


      });
      res.status(200).json(matriculaList)
    } catch (error) {
      return res.status(500).json({ erro: error.message })
    }
  }

  async getFullCourses(req, res) {

    const courseQtdFull = 2;
    try {
      const fullCourses = await matriculaServices.findAndCountMatriculas({
        where: {
          status: 'matriculado'
        },
        attibutes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) > ${courseQtdFull}`)
      });
      res.status(200).json(fullCourses.count)
    } catch (error) {
      return res.status(500).json({ erro: error.message })
    }

  }


}



module.exports = MatriculaController