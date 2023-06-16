module.exports = function (sequelize, DataTypes) {
  const Policy = sequelize.define(
    'Policy',
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
      policyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
      },
      organizationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      resourceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        associate(models) {
          // associations can be defined here
          Policy.belongsTo(models.Organization, {
            foreignKey: "organizationId"
          })
        },
      },
    }
  );
  Policy.associate = function (models) {
    Policy.belongsTo(models.Resource, {
        foreignKey: "resourceId"
    })
  }
  return Policy;
};
