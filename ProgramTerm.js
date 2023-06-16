module.exports = function (sequelize, DataTypes) {
  const ProgramTerm = sequelize.define(
    "ProgramTerm",
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
      term: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      startDate: {
        type: DataTypes.DATE,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      biddingEnabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      programId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      minCredit: {
        type: DataTypes.INTEGER,
      },
      maxCredit: {
        type: DataTypes.INTEGER,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isDraft: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      theme: {
        type: DataTypes.STRING,
      },
      isActiveTerm: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      customName: {
        type: DataTypes.STRING,
      },
      minCourseCount: {
        type: DataTypes.INTEGER,
      },
      maxCourseCount: {
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

  ProgramTerm.associate = (models) => {
    // associations can be defined here
    ProgramTerm.belongsTo(models.Program, { foreignKey: "programId" });
    ProgramTerm.hasMany(models.TermCourse, { foreignKey: "programTermId" });
    ProgramTerm.hasMany(models.Section, { foreignKey: "programTermId" });
    ProgramTerm.hasOne(models.CourseBidding, { foreignKey: "programTermId" });
    ProgramTerm.hasMany(models.CourseFormat, { foreignKey: "termId" });
    ProgramTerm.hasMany(models.UserSection, { foreignKey: "programTermId" });
    ProgramTerm.hasMany(models.CourseStats, { foreignKey: "programTermId" });
    ProgramTerm.hasOne(models.TermStats, { foreignKey: "programTermId" })
  };

  return ProgramTerm;
};
