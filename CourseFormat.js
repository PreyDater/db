module.exports = function (sequelize, DataTypes) {
  const CourseFormat = sequelize.define(
    "CourseFormat",
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
      minCourseCount: {
        type: DataTypes.INTEGER,
      },
      maxCourseCount: {
        type: DataTypes.INTEGER,
      },
      minCredit: {
        type: DataTypes.INTEGER,
      },
      maxCredit: {
        type: DataTypes.INTEGER,
      },
      programId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      courseTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      courseModeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      courseTagId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      courseClassId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      termId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      minElectiveCount: {
        type: DataTypes.INTEGER,
      },
      maxElectiveCount: {
        type: DataTypes.INTEGER,
      },
      maxTermCount: {
        type: DataTypes.INTEGER,
      },
      minTermCount: {
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
  CourseFormat.associate = (models) => {
    // associations can be defined here
    CourseFormat.belongsTo(models.Program, { foreignKey: "programId" });
    CourseFormat.belongsTo(models.CourseType, { foreignKey: "courseTypeId" });
    CourseFormat.belongsTo(models.CourseTag, {
      foreignKey: "courseTagId",
    });
    CourseFormat.belongsTo(models.CourseMode, {
      foreignKey: "courseModeId",
    });
    CourseFormat.belongsTo(models.CourseClass, {
      foreignKey: "courseClassId",
    });
    CourseFormat.belongsTo(models.ProgramTerm, { foreignKey: "termId" });
  };

  return CourseFormat;
};
