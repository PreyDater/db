module.exports = function (sequelize, DataTypes) {
  const SessionDetail = sequelize.define(
    "SessionDetail",
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
      facultyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sessionDate: {
        type: DataTypes.DATE,
      },
      fromTime: {
        type: DataTypes.STRING,
      },
      toTime: {
        type: DataTypes.STRING,
      },
      sessionSubTopic:{
        type: DataTypes.JSON,
      },
      sessionId: {
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
      meetingLink: {
        type: DataTypes.STRING,
      },
      isDraft: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
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
      uploadAssignment: {
        type: DataTypes.STRING,
      },
      isCustom: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      totalPresent: {
        type: DataTypes.STRING,
      },
      totalAbsent: {
        type: DataTypes.STRING,
      },
      preReadHeading: {
        type: DataTypes.STRING,
      },
      studentPreRead: {
        type: DataTypes.JSON,
      },
      preReadJson: {
        type: DataTypes.JSON,
      },
      attendanceSubmissionDate: {
        type: DataTypes.DATE,
      },
      sessionName: {
        type: DataTypes.STRING,
      },
      courseMasterId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sessionTopic: {
        type: DataTypes.STRING,
      },
      totalStudents: {
        type: DataTypes.STRING,
      },
      isUpload: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      sessionRecording: {
        type: DataTypes.STRING,
      },
      sessionVideo: {
        type: DataTypes.STRING,
      },
      gcEventId: {
        type: DataTypes.JSON,
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
  SessionDetail.associate = function (models) {
    SessionDetail.belongsTo(models.User, {
      as: "Faculty",
      foreignKey: "facultyId",
    });
    SessionDetail.belongsTo(models.SessionDetail, {
      foreignKey: "sessionId",
    });
    SessionDetail.hasMany(models.UserCourse, {
      foreignKey: 'sessionId'
    })
    SessionDetail.hasMany(models.AssignmentDetails, {
      foreignKey: 'sessionId'
    })
    SessionDetail.hasMany(models.SessionFaculty, {
      foreignKey: 'sessionId'
    })
    SessionDetail.belongsTo(models.Section, {
      foreignKey: "sectionId",
    });
    SessionDetail.belongsTo(models.TermCourse, {
      foreignKey: 'termCourseId'
    })
    SessionDetail.hasMany(models.TempRecord, {
      foreignKey: 'sessionId'
    })
    SessionDetail.belongsTo(models.CourseMaster, {
      foreignKey: 'courseMasterId'
    })
  };
  return SessionDetail;
};
