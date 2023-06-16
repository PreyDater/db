module.exports = function (sequelize, DataTypes) {
  const CourseStats = sequelize.define(
    "CourseStats",
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
      termCourseId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      programTermId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      gpa: {
        type: DataTypes.INTEGER,
      },
      grade:{
        type: DataTypes.STRING,
      },
      attendanceData: {
        type: DataTypes.JSON,
      },
      isProcessed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
  CourseStats.associate = function (models) {
    CourseStats.belongsTo(models.ProgramTerm, {
      foreignKey: "programTermId",
    });
    CourseStats.belongsTo(models.TermCourse, {
      foreignKey: "termCourseId",
    });

  };

  return CourseStats;
};
