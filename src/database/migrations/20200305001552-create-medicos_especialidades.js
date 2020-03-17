module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('medicos_especialidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      medico_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'medicos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      especialidade_id:{
        type: Sequelize.INTEGER,
        references: {
          model: 'especialidades',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      created_at:{
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at:{
        allowNull: false,
        type: Sequelize.DATE
      },
    }),

  down: queryInterface => queryInterface.dropTable('medicos_especialidades'),
};
