module.exports = function (sequelize, DataTypes) {
    const ItemCategory = sequelize.define(
        'ItemCategory',
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            categoryName: {
                type: DataTypes.ENUM('Feedback', 'Assignment', 'Announcement', 'Quiz'),
                defaultValue: 'Feedback'
            },
            categoryType: {
                type: DataTypes.ENUM('Resources', 'Activities'),
                defaultValue: 'Resources'
            },
            path: {
                type: DataTypes.STRING
            },
            organizationId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue:false
            },
            createdBy: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            updatedBy: {
                type: DataTypes.INTEGER,
                allowNull: true,
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

    return ItemCategory;
};
