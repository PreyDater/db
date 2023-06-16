module.exports = function (sequelize, DataTypes) {
    const UserRole = sequelize.define(
        'UserRole',
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
                defaultValue: DataTypes.UUIDV4
            },
            roleId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            isAccess: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
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
        });
        UserRole.associate = (models) => {
            // associations can be defined here
            UserRole.belongsTo(models.Role, { foreignKey: 'roleId', });
            UserRole.belongsTo(models.User, { foreignKey: 'userId', });
          };

    return UserRole;
};
