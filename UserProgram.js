module.exports = function (sequelize, DataTypes) {
  const UserProgram = sequelize.define(
    "UserProgram",
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
      programId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      programMasterId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      overAllAttendance: {
        type: DataTypes.FLOAT,
      },
      cgpa: {
        type: DataTypes.INTEGER,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status:{
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
  UserProgram.associate = (models) => {
    // associations can be defined here
    UserProgram.belongsTo(models.ProgramMaster, {
      foreignKey: "programMasterId",
    });
    UserProgram.belongsTo(models.Program, { foreignKey: "programId" });
    UserProgram.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return UserProgram;
};
