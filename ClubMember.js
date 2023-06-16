module.exports = function (sequelize, DataTypes) {
    const ClubMember = sequelize.define(
        "ClubMember",
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
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            clubId: {
                type: DataTypes.INTEGER,
                allowNull: false,
          },
            memberType: {
                type: DataTypes.ENUM('coordinator', 'member', 'president'),
                defaultValue:'member'
            },
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            isSelected: {
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
    ClubMember.associate = (models) => {
        // associations can be defined here
        ClubMember.belongsTo(models.User, { foreignKey: 'createdBy', as: 'Creator' });
        ClubMember.belongsTo(models.User, { foreignKey: 'userId',  as: 'participent'  });
        ClubMember.belongsTo(models.Clubs, { foreignKey: 'clubId', });
    };

    return ClubMember;
};
