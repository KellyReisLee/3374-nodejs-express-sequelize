const dataSource = require('../database/models')

class Services {
  constructor(modelsName) {
    this.model = modelsName;
  }
  // Trabalhe com métodos não estáticos pois eles vão manipular dados das instâcias.

  async getAllSources() {
    return dataSource[this.model].findAll();
  }


  async getSourceId(id) {
    try {
      return dataSource[this.model].findByPk(Number(id))
    } catch (error) {
      console.log(error);
    }

  }

  async createSource(data) {
    // 'findOrCreate()' retorna uma array com objeto do modelo achado ou criado e um ''boolean.
    //Se o 'boolean' for true => registro criado, Se o 'boolean' for false => registro já existia. 
    try {
      return dataSource[this.model].create(data);
    } catch (error) {
      console.log(error);
    }

  }

  async updateSource(newData, id) {
    try {
      const updatedList = await dataSource[this.model].update(
        newData, { where: { id } }
      )

      if (updatedList[0] === 0) {
        return false
      }
      return true
    } catch (error) {
      console.log(error);
    }
  }


  async deleteSource(id) {
    //'destroy()' retorna o número de linhas deletadas.
    try {
      const deleteResult = await dataSource[this.model].destroy(
        { where: { id } }
      )

      if (deleteResult === 0) {
        return false
      }
      return true
    } catch (error) {
      console.log(error);
    }
  }
}


module.exports = Services;

// Explicação desse código: - Objetivo.
// 1. Encapsular a lógica de negócios;
// 2. Lida diretamente com o banco de dados;
// 3. Foi construído para receber um parâmetro genérico que representa
// a tabela que deve ser verificada, e esse parâmetro é o valor da propriedade 'model' que também será usada dentro de 'getAllSources' em conjunto com o 
// método 'findAll()' proveniente do sequelize.