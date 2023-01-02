'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      home_team: {
        type: Sequelize.INTEGER
//        field: 'team_name'
      },

      home_team_goals: {
        type: Sequelize.INTEGER
      },

      away_team: {
        type: Sequelize.INTEGER
      },

      away_team_goals: {
        type: Sequelize.INTEGER
      },

      in_progress: {
        type: Sequelize.BOOLEAN
      },
      
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
}
