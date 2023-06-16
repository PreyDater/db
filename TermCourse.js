module.exports = function (sequelize, DataTypes) {
  const TermCourse = sequelize.define(
    "TermCourse",
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
      courseMasterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      hours: {
        type: DataTypes.INTEGER,
      },
      credits: {
        type: DataTypes.FLOAT,
      },
      courseTypeId: {
        type: DataTypes.INTEGER,
      },
      courseTagId: {
        type: DataTypes.INTEGER,
      },
      courseModeId: {
        type: DataTypes.INTEGER,
      },
      courseClassId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isMandatory: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isDraft: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      displayOrder: {
        type: DataTypes.INTEGER,
      },
      programTermId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      sectionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sessionFormat: {
        type: DataTypes.TEXT,
      },
      readingMaterial: {
        type: DataTypes.TEXT,
      },
      courseOutcome: {
        type: DataTypes.TEXT,
      },
      workexperienced: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      noOfSession: {
        type: DataTypes.STRING,
      },
      evaluationCriteria: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      topicsJson: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
      placementCourse: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      courseOverview: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      videoLink: {
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
  TermCourse.associate = (models) => {
    // associations can be defined here
    TermCourse.belongsTo(models.CourseMaster, { foreignKey: "courseMasterId" });
    TermCourse.hasMany(models.UserCourse, { foreignKey: "termCourseId" });
    TermCourse.belongsTo(models.ProgramTerm, { foreignKey: "programTermId" });
    TermCourse.belongsTo(models.CourseType, { foreignKey: "courseTypeId" });
    TermCourse.belongsTo(models.CourseTag, { foreignKey: "courseTagId" });
    TermCourse.belongsTo(models.Section, { foreignKey: "sectionId" });
    TermCourse.belongsTo(models.CourseMode, { foreignKey: "courseModeId" });
    TermCourse.belongsTo(models.CourseClass, { foreignKey: "courseClassId" });
    TermCourse.hasMany(models.SessionDetail, { foreignKey: "termCourseId" });
    TermCourse.hasMany(models.SessionFaculty, { foreignKey: "termCourseId" });
    TermCourse.hasMany(models.AssignmentDetails, {
      foreignKey: "termCourseId",
    });
    TermCourse.hasMany(models.SectionGroup, { foreignKey: "termCourseId" });
    TermCourse.hasOne(models.CourseStats, { foreignKey: "termCourseId" });
  };
  return TermCourse;
};
