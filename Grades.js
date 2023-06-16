module.exports = function (sequelize, DataTypes) {
  const Grades = sequelize.define(
    "Grades",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      studentAssignmentId: {
        type: DataTypes.INTEGER,
      },
      assignmentDetailId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      assignmentFeedback: {
        type: DataTypes.TEXT,
      },
      marksObtained: {
        type: DataTypes.INTEGER,
      },
      feedbackRequested: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      grade: {
        type: DataTypes.STRING,
      },
      isProcessed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      termCourseId: {
        type: DataTypes.INTEGER,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      updatedBy: {
        type: DataTypes.INTEGER,
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
  Grades.associate = function (models) {
    Grades.belongsTo(models.StudentAssignment, {
      foreignKey: "studentAssignmentId",
    });
    Grades.belongsTo(models.TermCourse, {
      foreignKey: 'termCourseId'
    }),
    Grades.belongsTo(models.AssignmentDetails, {
      foreignKey: 'assignmentDetailId'
    }),
    Grades.belongsTo(models.User, {
      foreignKey: 'createdBy'
    })
  };
  return Grades;
};
