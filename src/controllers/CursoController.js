const Controller = require("./Controller");
const CursoService = require('../services/CursoServices');


const cursoServices = new CursoService();

class CursoController extends Controller {
  constructor() {
    super(cursoServices)
  }
}



module.exports = CursoController