
const conversorIds = require('../utils/conversorDeStringHelper')
// OBS: LEMBRE-SE:
// Uma instância é um objeto concreto que é criado a partir de uma classe. Cada instância possui seus próprios dados e pode acessar os métodos definidos pela classe da qual foi criada.

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  // Get all
  async getAll(req, res) {
    // Chama o método 'getAllSources' da camada de serviços
    try {
      // chama o método 'getAllSources' da instancia, executa e armazena in 'resgiters'.
      const registers = await this.entidadeService.getAllSources();
      return res.status(200).json(registers)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }

  }

  async getAllWhere(req, res) {
    // Chama o método 'getAllSources' da camada de serviços
    try {
      // chama o método 'getAllSources' da instancia, executa e armazena in 'resgiters'.
      const registers = await this.entidadeService.getAllSourcesWhere();
      return res.status(200).json(registers)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }

  }

  // Get one with Id:
  async getDataId(req, res) {
    const { id } = req.params;
    try {
      const register = await this.entidadeService.getSourceId(id);
      res.status(200).json(register)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }

  }


  // Get one:
  async getDataOne(req, res) {
    const { ...params } = req.params;
    const where = conversorIds(params)
    console.log(where);
    try {
      const register = await this.entidadeService.getSourceOne(where)
      res.status(200).json(register)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }

  }

  // Create
  async createData(req, res) {
    const newDataBody = req.body;
    try {
      const registers = await this.entidadeService.createSource(newDataBody);

      if (!registers) {
        return res.status(400).json({ message: 'Data already exists!' });
      }

      res.status(200).json({
        message: 'Created Successfully!',
        user: { ...registers.dataValues }
      });
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  // Update
  async updateData(req, res) {
    const { ...params } = req.params;
    const newData = req.body;
    const where = conversorIds(params)
    try {
      const newDataUpdated = await this.entidadeService.updateSource(
        newData, where
      )

      if (!newDataUpdated) {
        return res.status(400).json({ message: 'Could not update!' })
      }
      res.status(200).json({ message: 'Updated Successfully!' })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  // Delete one with id:
  async deleteData(req, res) {
    const { id } = req.params;

    try {
      const deleteData = await this.entidadeService.deleteSource(Number(id)
      )
      if (!deleteData) {
        return res.status(404).json({ message: 'Could not find!' });
      }
      return res.status(200).json({ message: 'Deleted Successfully!' });
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

}

module.exports = Controller;


// Explicação desse código: - Objetivo.
// 1.  O Objetivo do controller é ser o intermediário entre Services e Requisição HTTP;

// 2. O Controller é responsável por receber requisições HTTP, chamar os métodos apropriados da camada de serviço e retornar respostas HTTP. Ele pode lidar com operações como criação, leitura, atualização e exclusão de dados.

// 3. Aqui ele recebe uma instância de 'Services' e a armazena na propriedade
// 'entidadeService'.

// 4. A instância do serviço é passada para o Controller pelo PessoaController.

// 5. dentro do try/catch --- chama o método 'getAllSources' da instancia, executa e armazena in 'resgiters'.

