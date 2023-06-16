module.exports = function (sequelize, DataTypes) {
    const RolePolicy = sequelize.define(
        'RolePolicy',
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
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            createdBy: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            updatedBy: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            resourceId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            policyId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            roleId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            isAccess: {
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
                associate() {
                    // associations can be defined here
                },
            },
        }
    );
    RolePolicy.associate = function (models) {
        RolePolicy.belongsTo(models.Role, {
          foreignKey: "roleId"
        })
        RolePolicy.belongsTo(models.Resource, {
            foreignKey: "resourceId"
        })
        RolePolicy.belongsTo(models.Policy, {
            foreignKey: "policyId"
          })
      }

    return RolePolicy;
};
