const Services = require('./Services.js')

class CategoriaServices extends Services {
  constructor() {
    super('Categoria');
  }
}

module.exports = CategoriaServices;


// Explicação desse código: - Objetivo.
// 1. Encapsular a lógica de negócios;
// 2. Estende a clásse genérica Service, especializando a para lidar apenas com a modulo 'Pessoa'.
// 3. Aqui 'super('Pessoa)' chama o constructor de 'Service' e receber o parêmetro 'Pesssoa' que será usado para trabalhar com o model 'Pessoa'.