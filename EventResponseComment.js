module.exports = function (sequelize, DataTypes) {
    const EventResponseComment = sequelize.define(
        "EventResponseComment",
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
            eventId: {
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
    EventResponseComment.associate = (models) => {
        // associations can be defined here
        EventResponseComment.belongsTo(models.Events, { foreignKey: 'eventId', });
    };

    return EventResponseComment;
};
