module.exports = function (sequelize, DataTypes) {
  const Organization = sequelize.define(
    'Organization',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      websiteUrl: {
        type: DataTypes.STRING
      },
      logoUrl: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      state: {
        type: DataTypes.STRING
      },
      pinCode: {
        type: DataTypes.STRING
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      classMethods: {
        associate(models) {
          // associations can be defined here
        },
      },
    }
  );
  Organization.associate = function (models) {
    Organization.hasMany(models.User, {
      foreignKey: 'organizationId'
    });
    Organization.hasMany(models.Role, {
      foreignKey: 'organizationId'
    });
    Organization.hasMany(models.Category, {
      foreignKey: 'organizationId'
    });
    Organization.hasMany(models.ProgramMaster, {
      foreignKey: 'organizationId'
    });
    Organization.hasMany(models.CourseMaster, {
      foreignKey: 'organizationId'
    });
    Organization.hasMany(models.CourseType, {
      foreignKey: 'organizationId'
    });
    Organization.hasMany(models.OrganizationIntegration, {
      foreignKey: "organizationId",
    });
    Organization.hasMany(models.AssignmentResource, {
      foreignKey: "organizationId",
    });
    Organization.hasMany(models.PlacementLevel, {
      foreignKey: "organizationId",
    });
    Organization.hasMany(models.ClubType, {
      foreignKey: "organizationId",
    });
  };

  return Organization;
};
