module.exports = function (sequelize, DataTypes) {
  const TempRecord = sequelize.define(
    "TempRecord",
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
      moduleName: {
        type: DataTypes.STRING,
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      allData: {
        type: DataTypes.JSON,
      },
      termCourseId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sessionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      isProcessed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isGradeProcessed: {
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
        associate(models) { },
      },
    }
  );
  TempRecord.associate = function (models) {
    TempRecord.belongsTo(models.Organization, {
      foreignKey: "organizationId",
    });
    TempRecord.belongsTo(models.SessionDetail, {
      foreignKey: "sessionId",
    });
    TempRecord.belongsTo(models.TermCourse, {
      foreignKey: "termCourseId",
    })
  };

  return TempRecord;
};
