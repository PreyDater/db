module.exports = function (sequelize, DataTypes) {
  const UserSection = sequelize.define(
    "UserSection",
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
      programTermId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      sectionId: {
        type: DataTypes.INTEGER,
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
  UserSection.associate = function (models) {
    UserSection.belongsTo(models.ProgramTerm, {
      foreignKey: "programTermId",
    });
    UserSection.belongsTo(models.User, {
      foreignKey: "userId",
    });
    UserSection.belongsTo(models.Section, {
      foreignKey: "sectionId",
    });
  };
  return UserSection;
};
