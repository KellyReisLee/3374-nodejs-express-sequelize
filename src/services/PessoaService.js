const dataSource = require('../database/models')

const Services = require('./Services.js')

class PessoaService extends Services {
  constructor() {
    super('Pessoa');
    this.matriculaServices = new Services('Matricula')
  }

  async getStudentMatriculasAtivas(id) {
    const student = await super.getSourceId(id);
    console.log(student)

    // 'getAulasMatriculadas' vai recuperar todas as instâncias de 'Matricula' associadas a uma instância de 'Pessoa.'
    //Nesse caso a instância de pessoa que tem a 'id' recebida pelo 'getStudentMatriculas'.
    const matriculasList = await student.getAulasMatriculadas();
    return matriculasList;

  }

  //getStudentMatriculasAll

  async getStudentMatriculasAll(id) {
    const student = await super.getSourceId(id);
    console.log(student)

    const matriculasList = await student.getTodasAsMatriculas();
    return matriculasList;

  }

  async getAllScope() {
    const allPessoasList = await super.getAllRegisterScope('allRegisters');
    return allPessoasList;
  }

  // Método para contar todas as matrículas associadas a um estudante
  async getCountMatriculas(id) {
    // Obtém a instância de Pessoa com o ID fornecido
    const student = await super.getSourceId(id);


    // Conta todas as instâncias de 'Matricula' associadas a uma instância de 'Pessoa'
    const matriculasCount = await student.countAulasMatriculadas();
    console.log(matriculasCount)
    return matriculasCount;
  }

  async postMatriculaUser(id, data) {
    // Obtém a instância de Pessoa com o ID fornecido
    const student = await super.getSourceId(id);

    // Conta todas as instâncias de 'Matricula' associadas a uma instância de 'Pessoa'
    const matriculasCount = await student.addAulasMatriculadas(data);
    return matriculasCount;
  }

  async cancelPessoaMatriculas(estudante_id) {

    return dataSource.sequelize.transaction(async (transacao) => {
      // Atualize dados do estudante na tabela pessoas
      await super.updateSource({ ativo: false }, { id: estudante_id }, transacao)
      // Atualize dados do estudante na tabela pessoas

      await this.matriculaServices.updateSource({ status: 'cancelado' }, { estudante_id }, transacao)

      // Atualiza matrículas.
    })


  }



}

module.exports = PessoaService;


// Explicação desse código: - Objetivo.
// 1. Encapsular a lógica de negócios;
// 2. Estende a clásse genérica Service, especializando a para lidar apenas com a modulo 'Pessoa'.
// 3. Aqui 'super('Pessoa)' chama o constructor de 'Service' e receber o parêmetro 'Pesssoa' que será usado para trabalhar com o model 'Pessoa'.