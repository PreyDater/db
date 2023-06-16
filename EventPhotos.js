module.exports = function (sequelize, DataTypes) {
    const EventPhotos = sequelize.define(
        "EventPhotos",
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
            eventId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            imgURL: {
                type: DataTypes.STRING,
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
    EventPhotos.associate = (models) => {
        // associations can be defined here
        EventPhotos.belongsTo(models.Events, { foreignKey: 'eventId', });
    };

    return EventPhotos;
};
