module.exports = function (sequelize, DataTypes) {
    const SessionFaculty = sequelize.define(
      "SessionFaculty",
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
        userType: {
          type: DataTypes.STRING,
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
          associate() {
            // associations can be defined here
          },
        },
      }
    );
  
    SessionFaculty.associate = (models) => {
      SessionFaculty.belongsTo(models.TermCourse, {
        foreignKey: "termCourseId",
      });
      SessionFaculty.belongsTo(models.User, {
        foreignKey: "userId",
      });
      SessionFaculty.belongsTo(models.SessionDetail, {
        foreignKey: "sessionId",
      });
    };
  
    return SessionFaculty;
  };
  