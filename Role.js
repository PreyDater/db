module.exports = function (sequelize, DataTypes) {
    const Role = sequelize.define(
      'Role',
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
        roleName: {
          type: DataTypes.STRING,
          allowNull: false
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
          allowNull: false
        },
        createdBy: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        updatedBy: {
          type: DataTypes.INTEGER,
          allowNull: true
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
        // classMethods: {
        //   associate: function (models) {
        //     // associations can be defined here
        //     Role.belongsTo(models.Organization, {
        //       foreignKey: "organizationId"
        //     })
        //   },
        // },
      });
      Role.associate = (models) => {
        // associations can be defined here
        Role.belongsTo(models.Organization, { foreignKey: 'organizationId', });
        Role.hasMany(models.UserRole, { foreignKey: 'roleId', });
        Role.hasMany(models.RolePolicy, { foreignKey: 'roleId', });
      };
  
    return Role;
  };
  