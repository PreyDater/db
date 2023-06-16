module.exports = function (sequelize, DataTypes) {
  const ReachOut = sequelize.define(
    "ReachOut",
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
      response: {
        type: DataTypes.JSON,
      },
      solvedBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      completedOn: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.STRING,
      },
      ticketNumber: {
        type: DataTypes.INTEGER,
        defaultValue: 1001,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
      classMethods: {},
    }
  );
  // ReachOut.associate = function (models) {
  //     ReachOut.belongsTo(models.Organization, {
  //         foreignKey: "organizationId"
  //     })
  //     ReachOut.hasMany(models.Policy, {
  //         foreignKey: "ReachOutId"
  //     })
  // }
  return ReachOut;
};
