module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('medicos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    crm: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    telefone: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    uf: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    cidade: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('medicos'),
};