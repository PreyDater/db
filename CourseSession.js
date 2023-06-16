module.exports = function (sequelize, DataTypes) {
  const CourseSession = sequelize.define(
    "CourseSession",
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
      sessionName: {
        type: DataTypes.STRING,
      },
      courseMasterId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sectionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      termCourseId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      preReadHeading:{
        type: DataTypes.STRING,
      },
      sessionCode: {
        type: DataTypes.STRING,
      },
      isDraft: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isCustom: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      uploadMaterial: {
        type: DataTypes.TEXT,
      },
      inClassUploadMaterial: {
        type: DataTypes.TEXT,
      },
      outClassUploadMaterial: {
        type: DataTypes.TEXT,
      },
      inClassHeading:{
        type: DataTypes.STRING,
      },
      outClassHeading:{
        type: DataTypes.STRING,
      },
      theme:{
        type: DataTypes.STRING,
      },
      sessionSubTopic:{
        type: DataTypes.JSON,
      },
      sessionTopic: {
        type: DataTypes.STRING,
      },
      totalStudents: {
        type: DataTypes.STRING,
      },
      isCustom: {
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
  CourseSession.associate = function (models) {
    CourseSession.hasMany(models.SessionDetail, {
      foreignKey: "sessionId",
    });
    // CourseSession.belongsTo(models.TermCourse, {
    //   foreignKey: "termCourseId",
    // });
    CourseSession.belongsTo(models.CourseMaster, {
      foreignKey: "courseMasterId",
    });
    CourseSession.hasMany(models.UserCourse, {
      foreignKey: "sessionId",
    });
    CourseSession.hasMany(models.SessionFaculty, {
      foreignKey: "sessionId",
    });
  };

  return CourseSession;
};
