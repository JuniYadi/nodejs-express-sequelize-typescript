import { QueryInterface, DataTypes, Sequelize } from "sequelize";

export const up = async (
  queryInterface: QueryInterface,
  Sequelize: Sequelize
) => {
  await queryInterface.createTable("Users", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
};

export const down = async (
  queryInterface: QueryInterface,
  Sequelize: Sequelize
) => {
  await queryInterface.dropTable("Users");
};
