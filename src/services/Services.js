const dataSource = require('../models')

class Services {
  constructor(modelsName) {
    this.model = modelsName;
  }
  // Trabalhe com métodos não estáticos pois eles vão manipular dados das instâcias.
  async getAllSources() {
    return dataSource[this.model].findAll();
  }
}


module.exports = Services;

// Explicação desse código: - Objetivo.
// 1. Encapsular a lógica de negócios;
// 2. Lida diretamente com o banco de dados;
// 3. Foi construído para receber um parâmetro genérico que representa
// a tabela que deve ser verificada, e esse parâmetro é o valor da propriedade 'model' que também será usada dentro de 'getAllSources' em conjunto com o 
// método 'findAll()' proveniente do sequelize.