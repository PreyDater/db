module.exports = function(sequelize, DataTypes) {
    const Quiz = sequelize.define(
        "Quiz",
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
                defaultValue: DataTypes.UUIDV4,
                unique: true
            },
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            assignmentDetailId: {
                type: DataTypes.INTEGER
            },
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            visitorId: {
                type: DataTypes.STRING,
            },
            isCompleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            quizObject: {
                type: DataTypes.JSON,
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

                }
            }
        }
    );

    Quiz.associate = function(models) {
        Quiz.hasOne(models.StudentAssignment, {
            foreignKey: 'quizId'
        })
        Quiz.belongsTo(models.AssignmentDetails, {
            foreignKey: 'assignmentDetailId'
        })
        Quiz.belongsTo(models.User, {
            foreignKey: 'userId'
        })
    }

    return Quiz;
}