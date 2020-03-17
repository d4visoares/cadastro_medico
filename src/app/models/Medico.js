module.exports = (sequelize, DataTypes)=>{
  const Medico = sequelize.define('Medico', {
    // medico_id: {type: DataTypes.STRING, primaryKey: true},
    nome:{
      type: DataTypes.STRING,
      validate:{
        len: [3, 40]
      }
    },
    crm:{ 
      type: DataTypes.STRING,
      validate:{
        len: [4, 4],
      }
    },
    telefone: {
      type: DataTypes.STRING,
      validate:{
        len: [15, 20]
      }
    },
    uf: {
      type: DataTypes.STRING,
      validate:{
        len: [2, 2]
      }
    },
    cidade: {
      type: DataTypes.STRING,
      validate:{
        len: [2, 40]
      }
    }
  });

  Medico.associate = (models)=>{
    Medico.belongsToMany(models.Especialidade, {
      through: 'medicos_especialidades',
      as: 'especialidades',
      foreignKey: 'medico_id'
    })
  }

  return Medico;
}