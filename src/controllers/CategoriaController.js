const Controller = require("./Controller");
const CategoriaService = require('../services/CategoriaServices');


const categoriaServices = new CategoriaService();

class CategoriaController extends Controller {
  constructor() {
    super(categoriaServices)
  }
}



module.exports = CategoriaController