module.exports = function (sequelize, DataTypes) {
  const AssignmentGroup = sequelize.define(
    "AssignmentGroup",
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
      groupName: {
        type: DataTypes.STRING,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      assignmentDetailId: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
  AssignmentGroup.associate = function (models) {
    AssignmentGroup.belongsTo(models.User, {
      foreignKey: "studentId",
    });
    AssignmentGroup.belongsTo(models.AssignmentDetails, {
      foreignKey: "assignmentDetailId",
    });
    AssignmentGroup.belongsTo(models.SectionGroup, {
      foreignKey: "groupId",
    });
  };
  return AssignmentGroup;
};
