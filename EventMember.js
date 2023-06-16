module.exports = function (sequelize, DataTypes) {
    const EventMember = sequelize.define(
        "EventMember",
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
            studentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            eventId: {
                type: DataTypes.INTEGER,
                allowNull: false,
          },
            role: {
                type: DataTypes.ENUM('member', 'participent', 'president'),
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
    EventMember.associate = (models) => {
        // associations can be defined here
        EventMember.belongsTo(models.User, { foreignKey: 'createdBy', as: 'Creator' });
        EventMember.belongsTo(models.User, { foreignKey: 'studentId',  as: 'participent' });
        // EventMember.belongsTo(models.Events, { foreignKey: 'createdBy', });
        EventMember.belongsTo(models.Events, { foreignKey: 'eventId', });
    };

    return EventMember;
};
