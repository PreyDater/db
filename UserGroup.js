module.exports = function (sequelize, DataTypes) {
  const UserGroup = sequelize.define(
    "UserGroup",
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
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      sectionGroupId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
        associate() {
          // associations can be defined here
        },
      },
    }
  );
    UserGroup.associate = function (models) {
      UserGroup.belongsTo(models.User, {
        foreignKey: "userId",
      });
      UserGroup.belongsTo(models.SectionGroup, {
        foreignKey: "sectionGroupId",
      });
    };
  return UserGroup;
};
