module.exports = function (sequelize, DataTypes) {
  const CourseMaster = sequelize.define(
    "CourseMaster",
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
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      courseCode: {
        type: DataTypes.STRING,
        unique:{
          msg: 'Course Code must be unique.',
        }
      },
      slug: {
        type: DataTypes.STRING,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      courseTypeId: {
        type: DataTypes.INTEGER,
      },
      courseTagId: {
        type: DataTypes.INTEGER,
      },
      courseClassId: {
        type: DataTypes.INTEGER,
      },
      courseModeId: {
        type: DataTypes.INTEGER,
      },
      hours: {
        type: DataTypes.STRING,
      },
      credits: {
        type: DataTypes.FLOAT,
      },
      numberOfSessions: {
        type: DataTypes.INTEGER,
      },
      courseFormat: {
        type: DataTypes.TEXT,
      },
      gradingPolicies: {
        type: DataTypes.STRING,
      },
      readingMaterial: {
        type: DataTypes.TEXT,
      },
      courseOutcome: {
        type: DataTypes.TEXT,
      },
      workexperienced :{
        type: DataTypes.TEXT,
        allowNull:true
      },
      courseShortName: {
        type: DataTypes.STRING,
      },
      videoLink: {
        type: DataTypes.STRING,
      },
      isPublished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDraft: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      evaluationCriteria :{
        type :DataTypes.JSON,
        allowNull :true,
      },
      courseOverview :{
        type :DataTypes.JSON,
        allowNull :true,
      },
      topicsJson :{
        type :DataTypes.JSON,
        allowNull :true,
      },
      placementCourse: {
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
  CourseMaster.associate = (models) => {
    // associations can be defined here
    CourseMaster.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    });
    // CourseMaster.belongsTo(models.ProgramMaster, { foreignKey: 'programMasterId', });
    CourseMaster.belongsTo(models.CourseType, {
      foreignKey: "courseTypeId",
    });
    CourseMaster.belongsTo(models.CourseTag, {
      foreignKey: "courseTagId",
    });
    CourseMaster.belongsTo(models.CourseMode, {
      foreignKey: "courseModeId",
    });
    CourseMaster.hasMany(models.CourseSession, {
      foreignKey: "courseMasterId",
    });
    CourseMaster.belongsTo(models.CourseClass, {
      foreignKey: "courseClassId",
    });
    CourseMaster.hasMany(models.TermCourse, {
      foreignKey: "courseMasterId",
    });
    CourseMaster.hasMany(models.SessionDetail, {
      foreignKey: "courseMasterId",
    });
  };

  return CourseMaster;
};
