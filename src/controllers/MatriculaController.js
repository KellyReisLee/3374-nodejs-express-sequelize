const Controller = require("./Controller");
const MatriculaService = require('../services/MatriculaServices');


const matriculaServices = new MatriculaService();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices)
  }
}



module.exports = MatriculaController