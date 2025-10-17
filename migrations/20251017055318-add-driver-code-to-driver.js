"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Driver", "driver_code", {
      type: Sequelize.STRING,
      allowNull: true,
      comment: "Unique driver code",
      after: "id", // MySQL only; ignored in Postgres
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Driver", "driver_code");
  },
};
