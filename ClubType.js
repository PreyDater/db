module.exports = function (sequelize, DataTypes) {
    const ClubType = sequelize.define(
        'ClubType',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            uuid: {
                type: DataTypes.UUID,
                allowNull: false,
                defaultValue: DataTypes.UUIDV4,
            },
            type: {
                type: DataTypes.STRING,
        
            },
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            // clubId: {
            //     type: DataTypes.INTEGER,
            //     allowNull: false,
            // },
            organizationId: {
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
    ClubType.associate = (models) => {
        // associations can be defined here
        ClubType.hasMany(models.Clubs, { foreignKey: 'clubTypeId' });
        // ClubType.belongsTo(models.Clubs, { foreignKey: 'clubId' });
        ClubType.belongsTo(models.User, { foreignKey: 'createdBy', });
    };

    return ClubType;
};
