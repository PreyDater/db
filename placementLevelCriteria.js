module.exports = function (sequelize, DataTypes) {
  const PlacementLevelCriteria = sequelize.define(
    "PlacementLevelCriteria",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      placementLevelId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      criteriaConfiguration: {
        type: DataTypes.JSON,
      },
      programId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
      classMethods: {
        associate(models) {},
      },
    }
  );
  PlacementLevelCriteria.associate = function (models) {
    PlacementLevelCriteria.belongsTo(models.PlacementLevel, {
      foreignKey: "placementLevelId",
    });
    PlacementLevelCriteria.belongsTo(models.Program, {
      foreignKey: "programId",
    });
  };

  return PlacementLevelCriteria;
};
