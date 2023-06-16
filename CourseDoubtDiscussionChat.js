module.exports = function (sequelize, DataTypes) {
    const CourseDoubtDiscussionChat = sequelize.define(
        'CourseDoubtDiscussionChat',
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
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            courseDoubtDiscussionId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            message: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            fileLink: {
                type: DataTypes.STRING,
                allowNull: true
            },
            filetype: {
                type: DataTypes.STRING,
                allowNull: true
            },
            fileSize: {
                type: DataTypes.STRING,
                allowNull: true
            },
            fileName: {
                type: DataTypes.STRING,
                allowNull: true
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
                associate: function (models) {
                    // associations can be defined here
                },
            },
        });
    CourseDoubtDiscussionChat.associate = (models) => {
        // associations can be defined here
        CourseDoubtDiscussionChat.belongsTo(models.User, { foreignKey: 'userId', });
        CourseDoubtDiscussionChat.belongsTo(models.CourseDoubtDiscussion, { foreignKey: 'courseDoubtDiscussionId', });

    };

    return CourseDoubtDiscussionChat;
};
