module.exports = (sequelize, DataTypes)=>{
  const Especialidade = sequelize.define('Especialidade', {
    // especialidade_id: {type: DataTypes.STRING, primaryKey: true},
    nome: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 50],
      }
    }
  });

  Especialidade.associate = (models)=>{
    Especialidade.belongsToMany(models.Medico, {
      through: 'medicos_especialidades',
      as: 'medicos',
      foreignKey: 'especialidade_id',
    })
  }

  return Especialidade;
}