module.exports = function (sequelize, DataTypes) {
  const UserLevel = sequelize.define(
    "UserLevel",
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
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      placementLevelId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      levelCriteria: {
        type: DataTypes.JSON,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
        associate() {
          // associations can be defined here
        },
      },
    }
  );

  UserLevel.associate = (models) => {
    UserLevel.belongsTo(models.PlacementLevel, {
      foreignKey: "placementLevelId",
    });
  };

  return UserLevel;
};
