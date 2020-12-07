module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('developers', 'age', {
      type: Sequelize.INTEGER,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('developers', 'age');
  }
};