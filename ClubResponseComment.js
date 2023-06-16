module.exports = function (sequelize, DataTypes) {
    const ClubResponseComment = sequelize.define(
        "ClubResponseComment",
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
            sequence: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            clubId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            isAdmin: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            response: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            isDeleted: {
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
    ClubResponseComment.associate = (models) => {
        // associations can be defined here
        ClubResponseComment.belongsTo(models.Clubs, { foreignKey: 'clubId', });
    };

    return ClubResponseComment;
};
