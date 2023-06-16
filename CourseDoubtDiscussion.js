module.exports = function (sequelize, DataTypes) {
    const CourseDoubtDiscussion = sequelize.define(
        'CourseDoubtDiscussion',
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
            termCourseId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            topicName: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            sourceLink: {
                type: DataTypes.STRING,
                allowNull: true
            },
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            detailDiscussion: {
                type: DataTypes.TEXT,
                allowNull: true
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
            isNotice: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                comment: "if true doubt is show on notice feed"
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
    CourseDoubtDiscussion.associate = (models) => {
        // associations can be defined here
        CourseDoubtDiscussion.belongsTo(models.User, { foreignKey: 'userId', });
        CourseDoubtDiscussion.hasMany(models.CourseDoubtDiscussionChat, {
            foreignKey: "courseDoubtDiscussionId",
        });
        CourseDoubtDiscussion.belongsTo(models.TermCourse, { foreignKey: 'termCourseId', });

    };

    return CourseDoubtDiscussion;
};
