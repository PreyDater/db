module.exports = function (sequelize, DataTypes) {
  const ProgramMaster = sequelize.define(
    "ProgramMaster",
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
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      organizationId: {
        type: DataTypes.INTEGER,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      totalCohort: {
        type: DataTypes.INTEGER,
      },
      programMode: {
        type: DataTypes.ENUM("Online", "Offline", "Hybrid", "Others"),
        defaultValue: "Online",
      },
      otherMode: {
        type: DataTypes.STRING,
      },
      programSystem: {
        type: DataTypes.ENUM("Semester", "Annual", "Term", "Others"),
        defaultValue: "Semester",
      },
      otherProSystem: {
        type: DataTypes.STRING,
      },
      durationInMonths: {
        type: DataTypes.INTEGER,
      },
      durationInYears: {
        type: DataTypes.INTEGER,
      },
      durationOfTerm: {
        type: DataTypes.INTEGER,
      },
      isDraft: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      programFees: {
        type: DataTypes.INTEGER,
      },
      paymentTimeline: {
        type: DataTypes.STRING,
      },
      policyFile: {
        type: DataTypes.STRING,
      },
      gradingMechanism: {
        type: DataTypes.STRING,
      },
      numberOfTerms: {
        type: DataTypes.INTEGER,
      },
      logo: {
        type: DataTypes.STRING,
      },
      targetGroup: {
        type: DataTypes.STRING,
      },
      admissionCriterion: {
        type: DataTypes.STRING,
      },
      worksheet: {
        type: DataTypes.STRING,
      },
      isActive: {
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
  ProgramMaster.associate = (models) => {
    // associations can be defined here
    ProgramMaster.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    });
    ProgramMaster.belongsTo(models.Category, { foreignKey: "categoryId" });
    ProgramMaster.hasMany(models.Program, { foreignKey: "programMasterId" });
    // ProgramMaster.hasMany(models.CourseMaster, { foreignKey: 'programMasterId', });
    ProgramMaster.hasMany(models.UserProgram, { foreignKey: "programMasterId" });
    ProgramMaster.hasMany(models.Clubs, { foreignKey: "programMasterId" });
    ProgramMaster.hasOne(models.AnnouncementDetails, { foreignKey: "programMasterId" });
  };

  return ProgramMaster;
};
