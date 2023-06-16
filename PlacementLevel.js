module.exports = function (sequelize, DataTypes) {
  const PlacementLevel = sequelize.define(
    "PlacementLevel",
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
      name: {
        type: DataTypes.STRING,
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
  PlacementLevel.associate = function (models) {
    PlacementLevel.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    });
    PlacementLevel.hasMany(models.PlacementLevelCriteria, {
      foreignKey: "placementLevelId",
    });
    PlacementLevel.hasMany(models.UserLevel, {
      foreignKey: "placementLevelId",
    });
  };

  return PlacementLevel;
};
