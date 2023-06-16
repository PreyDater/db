module.exports = function (sequelize, DataTypes) {
  const Program = sequelize.define(
    "Program",
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
      batchName: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      programSystem: {
        type: DataTypes.ENUM("Semester", "Annual", "Term", "Others"),
        defaultValue: "Semester",
      },
      durationInMonths: {
        type: DataTypes.INTEGER,
      },
      durationInYears: {
        type: DataTypes.INTEGER,
      },
      batchNumber: {
        type: DataTypes.INTEGER,
      },
      numberOfTerms: {
        type: DataTypes.INTEGER,
      },
      enrolledStudents: {
        type: DataTypes.INTEGER,
      },
      programMode: {
        type: DataTypes.ENUM("Online", "Offline", "Hybrid", "Others"),
        defaultValue: "Online",
      },
      programMasterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDraft: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      totalCohort: {
        type: DataTypes.INTEGER,
      },
      startDate: {
        type: DataTypes.DATE,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      sectionSize: {
        type: DataTypes.INTEGER,
      },
      durationOfTerm: {
        type: DataTypes.INTEGER,
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
      otherMode: {
        type: DataTypes.STRING,
      },
      otherProSystem: {
        type: DataTypes.STRING,
      },
      googleCalenderId: {
        type: DataTypes.STRING,
      },
      gradingTemplate :{
        type: DataTypes.STRING,
      },
      gradingTemplateMasterId: {
        type: DataTypes.INTEGER,
        allowNull:true
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
  Program.associate = (models) => {
    // associations can be defined here
    Program.belongsTo(models.ProgramMaster, { foreignKey: "programMasterId" });
    Program.hasMany(models.ProgramTerm, { foreignKey: "programId" });
    Program.hasMany(models.CourseFormat, { foreignKey: "programId" });
    Program.hasMany(models.UserProgram, { foreignKey: "programId" });
    Program.hasMany(models.PlacementLevelCriteria, { foreignKey: "programId" });
    Program.hasMany(models.AnnouncementDetails, { foreignKey: "programId" });
    Program.belongsTo(models.GradingTemplateMaster, {foreignKey: 'gradingTemplateMasterId'})
  };

  return Program;
};
