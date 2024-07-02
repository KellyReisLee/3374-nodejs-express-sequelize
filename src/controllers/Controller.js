

// OBS: LEMBRE-SE:
// Uma instância é um objeto concreto que é criado a partir de uma classe. Cada instância possui seus próprios dados e pode acessar os métodos definidos pela classe da qual foi criada.

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

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
}

module.exports = Controller;


// Explicação desse código: - Objetivo.
// 1.  O Objetivo do controller é ser o intermediário entre Services e Requisição HTTP;

// 2. O Controller é responsável por receber requisições HTTP, chamar os métodos apropriados da camada de serviço e retornar respostas HTTP. Ele pode lidar com operações como criação, leitura, atualização e exclusão de dados.

// 3. Aqui ele recebe uma instância de 'Services' e a armazena na propriedade
// 'entidadeService'.

// 4. A instância do serviço é passada para o Controller pelo PessoaController.

// 5. dentro do try/catch --- chama o método 'getAllSources' da instancia, executa e armazena in 'resgiters'.

