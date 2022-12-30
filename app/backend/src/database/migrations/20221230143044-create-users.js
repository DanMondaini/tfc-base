'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      username: {
        type: sequelize.STRING
      },

      role: {
        type: sequelize.STRING
      },

      email: {
        type: sequelize.STRING
      },

      password: {
        type: sequelize.STRING
      },


    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
}
