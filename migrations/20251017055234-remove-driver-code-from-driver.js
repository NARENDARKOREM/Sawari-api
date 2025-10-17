"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Driver", "driver_code");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Driver", "driver_code", {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Unique driver code",
      after: "id",
    });
  },
};
