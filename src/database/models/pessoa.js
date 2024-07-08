'use strict';
const isValid = require('../../utils/cpfHelper')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id'
      })
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: { status: 'matriculado' },
        as: 'aulasMatriculadas'
      })

      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        as: 'todasAsMatriculas'
      })
      // define association here
    }
  }
  Pessoa.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        isNotLen(value) {
          if (value.length < 3) {
            throw new Error('Must contain at least 3 characters.');
          } else if (value.length > 15) {
            throw new Error('Must contain less than 15 characters.');
          }
        }
      }

    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email Invalid!'
        },
        isNotSpam(value) {
          const spamWords = ['spam', 'junk', 'ads'];
          if (spamWords.some(word => value.includes(word))) {
            throw new Error('O e-mail não pode conter palavras de spam');
          }
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        validCpf: (cpf) => {
          if (!isValid(cpf)) {
            throw new Error('CPF number invalid!')
          }
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'pessoas',
    paranoid: true,
    timestamps: true,
    defaultScope: {
      where: {
        ativo: true
      }
    },
    scopes: {
      allRegisters: {
        where: {}
      }
    }
  });
  return Pessoa;
};