module.exports = function (sequelize, DataTypes) {
  const CourseBidding = sequelize.define(
    "CourseBidding",
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
      startDate: {
        type: DataTypes.DATE,
      },
      endDate: {
        type: DataTypes.DATE,
      },
      isEnabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      programTermId: {
        type:  DataTypes.INTEGER,
        allowNull: false,
      },
      programId: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
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
  CourseBidding.associate = (models) => {
    // associations can be defined here
    CourseBidding.belongsTo(models.ProgramTerm, { foreignKey: "programTermId" });
    CourseBidding.belongsTo(models.Program, { foreignKey: "programId" });
  };
  return CourseBidding;
};
