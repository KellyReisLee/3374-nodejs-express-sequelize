

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
      console.log(error);
    }

  }

  // Get one with Id:
  async getDataId(req, res) {
    const { id } = req.params;
    try {
      const register = await this.entidadeService.getSourceId(id);
      res.status(200).json(register)
    } catch (error) {
      console.log(error);
    }

  }

  // Create
  async createData(req, res) {
    const newDataBody = req.body;
    try {
      const registers = await this.entidadeService.createSource(newDataBody);

      if (!registers) {
        return res.status(400).json({ message: 'User already exists!' });
      }

      res.status(200).json({
        message: 'Created Successfully!',
        user: { ...registers.dataValues }
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  }

  // Update
  async updateData(req, res) {
    const { id } = req.params;
    const newData = req.body;

    try {
      const newDataUpdated = await this.entidadeService.updateSource(
        newData, Number(id)
      )

      if (!newDataUpdated) {
        return res.status(400).json({ message: 'Could not update!' })
      }
      res.status(200).json({ message: 'Updated Successfully!' })
    } catch (error) {
      console.log(error);
    }
  }

  // Delete one with id:
  async deleteData(req, res) {
    const { id } = req.params;

    try {
      const deleteData = await this.entidadeService.deleteSource(Number(id)
      )
      if (!deleteData) {
        return res.status(404).json({ message: 'Could not find user!' });
      }
      return res.status(200).json({ message: 'User deleted!' });
    } catch (error) {
      console.log(error);
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

