
const Services = require('./Services.js')

class PessoaService extends Services {
  constructor() {
    super('Pessoa');
  }

  async getStudentMatriculas(id) {
    const student = await super.getSourceId(id);
    console.log(student)

    // 'getAulasMatriculadas' vai recuperar todas as instâncias de 'Matricula' associadas a uma instância de 'Pessoa.'
    //Nesse caso a instância de pessoa que tem a 'id' recebida pelo 'getStudentMatriculas'.
    const matriculasList = await student.getAulasMatriculadas();
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
    console.log(matriculasCount)
    return matriculasCount;
  }




}

module.exports = PessoaService;


// Explicação desse código: - Objetivo.
// 1. Encapsular a lógica de negócios;
// 2. Estende a clásse genérica Service, especializando a para lidar apenas com a modulo 'Pessoa'.
// 3. Aqui 'super('Pessoa)' chama o constructor de 'Service' e receber o parêmetro 'Pesssoa' que será usado para trabalhar com o model 'Pessoa'.