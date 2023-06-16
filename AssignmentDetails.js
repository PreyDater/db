module.exports = function (sequelize, DataTypes) {
  const AssignmentDetails = sequelize.define(
    "AssignmentDetails",
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
      assignmentDetails: {
        type: DataTypes.TEXT,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      sessionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sectionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      assignmentResourceId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      termCourseId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      submissionDate: {
        type: DataTypes.DATE,
      },
      marksReleaseDate: {
        type: DataTypes.DATE,
      },
      uploadResource: {
        type: DataTypes.STRING,
      },
      weightagePercentage: {
        type: DataTypes.STRING,
      },
      totalPoints: {
        type: DataTypes.STRING,
      },
      isGroup: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      appId: {
        type: DataTypes.STRING,
      },
      configurationData: {
        type: DataTypes.JSON,
      },
      quizType: {
        type: DataTypes.STRING,
      },
      outWeightagePercentage: {
        type: DataTypes.STRING,
      },
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
  AssignmentDetails.associate = function (models) {
    AssignmentDetails.belongsTo(models.User, {
      foreignKey: "createdBy",
    });
    AssignmentDetails.belongsTo(models.SessionDetail, {
      foreignKey: "sessionId",
    });
    AssignmentDetails.belongsTo(models.AssignmentResource, {
      foreignKey: "assignmentResourceId",
    });
    AssignmentDetails.hasMany(models.AssignmentGroup, {
      foreignKey: "assignmentDetailId",
    });
    AssignmentDetails.belongsTo(models.TermCourse, {
      foreignKey: 'termCourseId'
    });
    AssignmentDetails.belongsTo(models.User, {
      foreignKey: 'createdBy'
    })
    AssignmentDetails.hasMany(models.StudentAssignment, {
      foreignKey: 'assignmentDetailId'
    })
    AssignmentDetails.hasMany(models.Quiz, {
      foreignKey: 'assignmentDetailId'
    })
    AssignmentDetails.hasOne(models.Grades, {
      foreignKey: 'assignmentDetailId'
    })
    AssignmentDetails.hasMany(models.Quiz, {
      foreignKey: 'assignmentDetailId'
    })
    AssignmentDetails.belongsTo(models.SectionGroup, {
      foreignKey: 'groupId'
    })
  };
  return AssignmentDetails;
};
