module.exports = function (sequelize, DataTypes) {
  const UserCourse = sequelize.define(
    "UserCourse",
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
      termCourseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sessionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      userType: {
        type: DataTypes.STRING,
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

  UserCourse.associate = (models) => {
    UserCourse.belongsTo(models.TermCourse, {
      foreignKey: "termCourseId",
    });
    UserCourse.belongsTo(models.User, {
      as: "Faculty",
      foreignKey: "userId",
    });
    UserCourse.belongsTo(models.SessionDetail, {
      foreignKey: "sessionId",
    })
  };

  return UserCourse;
};
