module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('developers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      age: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url_linkedin: {
        type: Sequelize.STRING
      },
      technologies: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('developers');
  },
};
