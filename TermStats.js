module.exports = function (sequelize, DataTypes) {
    const TermStats = sequelize.define(
      "TermStats",
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
        userId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        programTermId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        programId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        attendanceData: {
          type: DataTypes.JSON,
        },
        tgpa: {
          type: DataTypes.INTEGER,
        },
        cgpa: {
          type: DataTypes.STRING,
        },
        isProcessed: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
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
    TermStats.associate = function (models) {
      TermStats.belongsTo(models.ProgramTerm, { foreignKey: "programTermId" });
    };
    return TermStats;
  };
  